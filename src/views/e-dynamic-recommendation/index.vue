<template>
  <div class="app-container">
    <el-row>
      <el-form
        label-width="100px"
      >
        <el-form-item label="用户id" style="display: inline-block !important">
          <el-input-number
            v-model="userId"
            :max="userIdRange.max"
            :min="userIdRange.min"
            controls-position="right"
          />
        </el-form-item>
        <el-form-item style="display: inline-block !important">
          <el-button
            type="primary"
            size="large"
            style="margin-left:5vw; display: inline-block !important"
            @click="search()"
          >查询</el-button>
        </el-form-item>
      </el-form>
    </el-row>
    <el-row v-if="newsClicked.length !== 0" span="20">
      <el-divider>历史点击记录：</el-divider>
      <el-table :data="newsClicked" style="width: 100%">
        <el-table-column prop="news_id" label="news_id" width="180" />
        <el-table-column prop="headline" label="headline" />
        <el-table-column prop="date" label="date" width="180" />
        <el-table-column fixed="right" label="Operations" width="120">
          <template #default="scope">
            <el-button
              link
              type="primary"
              size="small"
              @click.prevent="goNewsContent(scope.row)"
            >
              查看详细
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
    <el-row v-if="newsRecommended.length !== 0" span="20">
      <el-divider>新闻推荐：</el-divider>
      <el-table :data="newsRecommended" style="width: 100%">
        <el-table-column prop="news_id" label="news_id" width="180" />
        <el-table-column prop="category" label="category" width="180" />
        <el-table-column prop="topic" label="topic" width="180" />
        <el-table-column prop="headline" label="headline" />
        <el-table-column fixed="right" label="Operations" width="120">
          <template #default="scope">
            <el-button
              link
              type="primary"
              size="small"
              @click.prevent="goNewsContent(scope.row)"
            >
              查看详细
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
    <el-dialog :visible.sync="dialogVisible">
      <span>headline: {{ headline }}</span>
      <br>content:<br>
      <span>{{ content }}</span>
    </el-dialog>
  </div>
</template>

<script>
import { mockGetNewsContent } from '@/api/news'
import { mockGetUserIdRange, mockGetUserRecommendation } from '@/api/user'

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
    mockGetUserIdRange().then(res => {
      this.userIdRange.min = res.data[0].min_user_id
      this.userIdRange.max = res.data[0].max_user_id
    }).catch(err => {
      console.log(err)
    })
  },
  methods: {
    search() {
      if (this.isInput) {
        // mock
        mockGetUserRecommendation(this.userId)
          .then(res => {
            this.newsRecommended = res.data.news
            this.newsClicked = res.data.clicks.map(item => {
              return {
                news_id: item.news_id,
                headline: item.headline,
                date: new Date(item.start_ts * 1000)
                  .toISOString()
                  .replace('T', ' ').replace('Z', '')
                  .slice(0, -4)
              }
            })
          }).catch(err => {
            console.log(err)
          })
      } else {
        this.$message({
          message: '请填写完整信息',
          type: 'warning'
        })
      }
    },
    goNewsContent(row) {
      mockGetNewsContent(row.news_id).then(res => {
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
  </style>

