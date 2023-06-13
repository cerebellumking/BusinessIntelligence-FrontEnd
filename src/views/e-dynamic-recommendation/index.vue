<template>
  <div class="app-container">
    <el-row>
      <el-form inline>
        <el-form-item label="用户id">
          <el-input-number v-model="userId" :max="userIdRange.max" :min="userIdRange.min" controls-position="right" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="large" @click="search()">查询</el-button>
        </el-form-item>
      </el-form>
    </el-row>
    <el-row v-if="newsClicked.length !== 0">
      <el-divider>历史点击记录</el-divider>
      <el-table :data="newsClicked" style="width: 100%; height: 'auto'" max-height="500px" stripe>
        <el-table-column prop="news_id" label="news_id" width="180" />
        <el-table-column prop="headline" label="headline" />
        <el-table-column prop="date" label="date" width="180" />
        <el-table-column fixed="right" label="Operations" width="120">
          <template #default="scope">
            <el-button link type="primary" size="small" @click.prevent="goNewsContent(scope.row)">
              查看详细
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
    <el-row v-if="newsRecommended.length !== 0">
      <el-divider>新闻推荐</el-divider>
      <el-table :data="newsRecommended" style="width: 100%; height: 500px" max-height="500px" stripe>
        <el-table-column prop="news_id" label="news_id" width="180" />
        <el-table-column prop="category" label="category" width="180" />
        <el-table-column prop="topic" label="topic" width="180" />
        <el-table-column prop="headline" label="headline" />
        <el-table-column fixed="right" label="Operations" width="120">
          <template #default="scope">
            <el-button link type="primary" size="small" @click.prevent="goNewsContent(scope.row)">
              查看详细
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
    <el-dialog :visible.sync="dialogVisible" align-center center draggable width="90%">
      <template slot="title">
        <span class="news-headline">{{ headline }}</span>
      </template>
      <span class="news-content">{{ content }}</span>
    </el-dialog>
  </div>
</template>

<script>
let websocket = null
export default {
  data() {
    return {
      userId: '',
      userIdRange: {
        min: 0,
        max: 0
      },
      newsRecommended: [],
      newsClicked: [],
      headline: '',
      content: '',
      dialogVisible: false
    }
  },
  computed: {
    isInput() {
      return this.userId !== ''
    }
  },
  mounted() {
    this.$axios({
      url: '/range/userid',
      method: 'get'
    }).then(res => {
      this.userIdRange.min = res.data[0].min_user_id
      this.userIdRange.max = res.data[0].max_user_id
    }).catch(err => {
      console.log(err)
    })
  },
  methods: {
    search() {
      if (this.isInput) {
        websocket = new WebSocket('ws://127.0.0.1:8081/websocket/' + this.userId)
        websocket.onopen = () => {
          console.log('websocket open')
        }
        websocket.onmessage = (res) => {
          console.log('收到消息')
          res = JSON.parse(res.data)
          console.log(res)
          this.newsRecommended = res.news
          if (res.clicks == null) {
            this.newsClicked = []
          } else {
            this.newsClicked = res.clicks.map(item => {
              return {
                news_id: item.news_id,
                headline: item.headline,
                date: new Date(item.start_ts * 1000)
                  .toISOString()
                  .replace('T', ' ').replace('Z', '')
                  .slice(0, -4)
              }
            })
          }
        }
        const sendWebSocketMessage = () => {
          if (websocket.readyState === WebSocket.OPEN) {
            console.log('发送消息')
            websocket.send('hello')
          }
        }

        const sendInterval = setInterval(sendWebSocketMessage, 5000)

        // 当连接关闭时清除定时器
        websocket.onclose = () => {
          clearInterval(sendInterval)
        }
      } else {
        this.$message({
          message: '请填写完整信息',
          type: 'warning'
        })
      }
    },
    goNewsContent(row) {
      this.$axios({
        url: '/news/content',
        params: {
          news_id: row.news_id
        },
        method: 'get'
      }).then(res => {
        this.headline = row.headline
        this.content = res.data.content
        this.dialogVisible = true
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>
.el-form-item {
  margin-left: 10px;
  margin-right: 10px;
  flex-shrink: 0;
}

.el-col>.el-row {
  display: flex;
  width: 100%;
}

.news-headline {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 15px;
}

.news-content {
  font-family: Arial, sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #333;
  background-color: #fff;
}
</style>

