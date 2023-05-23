<template>
  <div class="app-container">
    <el-row>
      <el-form
        ref="form"
        :model="form"
        label-width="100px"
      >
        <el-form-item label="新闻标题" style="display: inline-block !important">
          <el-autocomplete
            v-model="form.headline"
            :fetch-suggestions="getSuggestNews"
            placeholder="请输入新闻关键词"
            style="width: 20vw"
            clearable
            @select="handleSelect"
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
      博哥好强
    </el-row>
  </div>
</template>

<script>
import { mockGetSuggestNews } from '@/api/suggest'

export default {
  data() {
    return {
      form: {
        headline: '',
        startDate: '',
        endDate: ''
      }
    }
  },
  methods: {
    handleSelect(item) {
      console.log(item)
    },
    getSuggestNews(queryString, cb) {
      mockGetSuggestNews().then(res => {
        console.log(res.data)
        var results = []
        for (var i = 0; i < res.data.length; i++) {
          results.push({
            value: res.data[i]
          })
        }
        cb(results)
      }).catch(err => {
        console.log(err)
      })
    },
    search(form) {
      console.log(form)
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

