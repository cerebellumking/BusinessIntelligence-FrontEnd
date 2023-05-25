<template>
  <div class="app-container">
    <el-row>
      <el-form
        ref="form"
        :model="form"
        label-width="100px"
      >
        <el-form-item label="新闻种类" style="display: inline-block !important">
          <el-select v-model="form.categorys" placeholder="请选择种类" multiple>
            <el-option
              v-for="category in categoryList"
              :key="category"
              :label="category"
              :value="category"
            />
          </el-select>
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
import { mockGetCategoryNewsChanging, mockGetAllCategoryList } from '@/api/news'

export default {
  data() {
    return {
      categoryList: [],
      form: {
        categorys: [],
        startDate: '',
        endDate: ''
      }
    }
  },
  computed: {
    isInput() {
      return this.form.categorys.length !== 0 && this.form.startDate !== '' && this.form.endDate !== ''
    }
  },
  mounted() {
    // mock
    mockGetAllCategoryList().then(res => {
      console.log(res)
      this.categoryList = res.data
    }).catch(err => {
      console.log(err)
    })
    this.chartInstance = this.$echarts.init(document.getElementById('chart'))
  },
  methods: {
    search(form) {
      console.log(form)
      if (this.isInput) {
        const startDate = new Date(form.startDate.replace(' ', 'T'))
        const endDate = new Date(form.endDate.replace(' ', 'T'))
        const start_ts = Date.parse(startDate) / 1000
        const end_ts = Date.parse(endDate) / 1000

        const dateList = []
        let _date = startDate
        while (_date <= endDate) {
          _date = new Date(_date.getFullYear(), _date.getMonth(), _date.getDate() + 1)
          dateList.push(_date.toISOString().split('T')[0])
        }
        // mock
        mockGetCategoryNewsChanging(start_ts, end_ts, form.categorys).then(res => {
          console.log(res)
          this.chartInstance.setOption({
            legend: {
              data: form.categorys,
              bottom: 'bottom',
              left: 'center'
            },
            xAxis: {
              type: 'category', // 离散数据
              data: dateList,
              name: '日期'
            },
            yAxis: form.categorys.map(item => {
              return {
                type: 'value'
              }
            }),
            tooltip: {
              trigger: 'axis',
              formatter: function(params) {
                console.log(params)
                let tooltip = '日期: ' + params[0].name + '<br/>'
                params.forEach(function(item) {
                  tooltip += item.seriesName + ': ' + item.value + '<br/>'
                })
                return tooltip
              }
            },
            series: form.categorys.map((item) => {
              return {
                name: item,
                type: 'line',
                data: res.data[item],
                smooth: true
              }
            })
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

