<template>
  <div class="app-container">
    <el-row>
      <el-form
        ref="form"
        inline
        :model="form"
        style="display: flex; width: 100%"
      >
        <el-form-item label="用户id">
          <el-input-number
            v-model="form.userId"
            :max="userIdRange.max"
            :min="userIdRange.min"
            controls-position="right"
            style="width: 146px"
          />
        </el-form-item>
        <el-form-item label="起始时间">
          <el-date-picker
            v-model="form.startDate"
            type="datetime"
            placeholder="选择日期"
            value-format="yyyy-MM-dd HH:mm:ss"
          />
        </el-form-item>
        <el-form-item label="结束时间">
          <el-date-picker
            v-model="form.endDate"
            type="datetime"
            placeholder="选择日期"
            value-format="yyyy-MM-dd HH:mm:ss"
          />
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            size="large"
            @click="search(form)"
          >查询</el-button>
        </el-form-item>
      </el-form>

    </el-row>
    <el-row span="20">
      <div id="chart" style="width: 80vw; height: 80vh" />
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userIdRange: {
        min: 0,
        max: 0
      },
      form: {
        userId: '',
        startDate: '',
        endDate: ''
      }
    }
  },
  computed: {
    isInput() {
      return this.form.userId !== '' && this.form.startDate !== '' && this.form.endDate !== ''
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
    search(form) {
      if (this.isInput) {
        const start_ts = Date.parse(new Date(form.startDate.replace(' ', 'T'))) / 1000
        const end_ts = Date.parse(new Date(form.endDate.replace(' ', 'T'))) / 1000
        this.$axios({
          url: '/user/interest',
          method: 'get',
          params: {
            start_ts: start_ts,
            end_ts: end_ts,
            user_id: form.userId
          }
        }).then(res => {
          console.log(res.data.map(item => item.category))
          this.$echarts.init(document.getElementById('chart')).setOption({
            xAxis: {
              type: 'category', // 离散数据
              data: res.data.map(item => item.category),
              name: '类别'
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

