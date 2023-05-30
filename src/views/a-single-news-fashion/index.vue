<template>
  <div class="app-container">
    <el-form ref="form" inline :model="form" style="display: flex; width: 100%">
      <el-form-item label="新闻标题">
        <el-autocomplete
          v-model="form.headline"
          :fetch-suggestions="getSuggestNews"
          placeholder="请输入新闻关键词"
          clearable
          @select="handleSelect"
        />
      </el-form-item>
      <el-form-item label="起始时间">
        <el-date-picker v-model="form.startDate" type="datetime" placeholder="选择日期" value-format="yyyy-MM-dd HH:mm:ss" />
      </el-form-item>
      <el-form-item label="结束时间">
        <el-date-picker v-model="form.endDate" type="datetime" placeholder="选择日期" value-format="yyyy-MM-dd HH:mm:ss" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="large" @click="search(form)">查询</el-button>
      </el-form-item>
    </el-form>
    <el-row span="20">
      <div id="chart" style="width: 80vw; height: 80vh" />
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        newsId: '',
        headline: '',
        startDate: '',
        endDate: ''
      }
    }
  },
  computed: {
    isInput() {
      return this.form.newsId !== '' && this.form.headline !== '' && this.form.startDate !== '' && this.form.endDate !== ''
    }
  },
  methods: {
    handleSelect(item) {
      this.form.newsId = item.label
      this.form.headline = item.value
    },
    getSuggestNews(queryString, cb) {
      this.$axios
        .get('/news', {
          params: {
            amount: 5,
            headline: queryString
          }
        }).then(res => {
          const results = res.data.map(item => {
            return {
              label: item.news_id,
              value: item.headline
            }
          })
          cb(results)
        }).catch(err => {
          console.log(err)
        })
    },
    search(form) {
      if (this.isInput) {
        const start_ts = Date.parse(new Date(form.startDate.replace(' ', 'T'))) / 1000
        const end_ts = Date.parse(new Date(form.endDate.replace(' ', 'T'))) / 1000
        this.$axios
          .get('/news/fashion', {
            params: {
              start_ts: start_ts,
              end_ts: end_ts,
              news_id: form.newsId
            }
          }).then(res => {
            console.log(res)
            this.$echarts.init(document.getElementById('chart')).setOption({
              xAxis: {
                type: 'category', // 离散数据
                data: res.data.map(item => item.date),
                name: '日期'
              },
              yAxis: {
                type: 'value'
              },
              tooltip: {
                trigger: 'axis', // 设置触发类型为坐标轴轴线触发
                formatter: '{b}: {c}' // 自定义工具提示的内容格式
              },
              series: [
                {
                  data: res.data.map(item => item.count),
                  type: 'line',
                  smooth: true
                }
              ]
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
    }
  }
}
</script>

<style scoped>
.el-form-item {
  flex-shrink: 0;
  flex-grow: 1;
  margin-left: 50px;
  margin-right: 50px;
}
</style>
