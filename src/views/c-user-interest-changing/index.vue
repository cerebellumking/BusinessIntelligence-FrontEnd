<template>
  <div class="app-container">
    <el-row>
      <el-form
        ref="form"
        :model="form"
        label-width="100px"
      >
        <el-form-item label="用户id" style="display: inline-block !important">
          <el-input-number
            v-model="form.userId"
            :max="userIdRange.max"
            :min="userIdRange.min"
            controls-position="right"
            style="width: 146px"
          />
        </el-form-item>
        <el-form-item label="起始时间" style="display: inline-block !important; margin-left:5vw">
          <el-date-picker
            v-model="form.startDate"
            type="datetime"
            placeholder="选择日期"
            value-format="yyyy-MM-dd HH:mm:ss"
          />
        </el-form-item>
        <el-form-item label="结束时间" style="display: inline-block !important">
          <el-date-picker
            v-model="form.endDate"
            type="datetime"
            placeholder="选择日期"
            value-format="yyyy-MM-dd HH:mm:ss"
          />
        </el-form-item>
        <el-form-item style="display: inline-block !important">
          <el-button
            type="primary"
            size="large"
            style="margin-left:5vw; display: inline-block !important"
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
import { mockGetUserInterestChanging, mockGetUserIdRange } from '@/api/user'

export default {
  data() {
    return {
      userIdRange: {
        min: '',
        max: ''
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
    mockGetUserIdRange().then(res => {
      console.log(res)
      this.userIdRange.min = res.data[0].min_user_id
      this.userIdRange.max = res.data[0].max_user_id
    })
  },
  methods: {
    search(form) {
      if (this.isInput) {
        const start_ts = Date.parse(new Date(form.startDate.replace(' ', 'T'))) / 1000
        const end_ts = Date.parse(new Date(form.endDate.replace(' ', 'T'))) / 1000
        // mock
        mockGetUserInterestChanging(start_ts, end_ts, form.userId).then(res => {
          console.log(res)
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
</style>

