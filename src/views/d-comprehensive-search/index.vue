<template>
  <div class="app-container">
    <el-form
      ref="form"
      inline
      :model="form"
      style="display: flex; width: 100%"
    >
      <el-col>
        <el-row>
          <el-form-item label="用户id">
            <el-input-number
              v-model="form.userId"
              :max="userIdRange.max"
              :min="userIdRange.min"
              controls-position="right"
            />
          </el-form-item>
          <el-form-item label="新闻标题长度">
            <el-input-number
              v-model="form.minHeadlineLength"
              :max="headlineLengthRange.max"
              :min="headlineLengthRange.min"
              controls-position="right"
            />
            <span style="margin-left: 10px; margin-right: 10px">至</span>
            <el-input-number
              v-model="form.maxHeadlineLength"
              :max="headlineLengthRange.max"
              :min="headlineLengthRange.min"
              controls-position="right"
            />
          </el-form-item>
          <el-form-item label="新闻内容长度">
            <el-input-number
              v-model="form.minContentLength"
              :max="contentLengthRange.max"
              :min="contentLengthRange.min"
              controls-position="right"
            />
            <span style="margin-left: 10px; margin-right: 10px">至</span>
            <el-input-number
              v-model="form.maxContentLength"
              :max="contentLengthRange.max"
              :min="contentLengthRange.min"
              controls-position="right"
            />
          </el-form-item>
        </el-row>
        <el-row style="display: flex; width: 100%">
          <el-form-item label="起始时间" style="display: inline-block !important;">
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
        </el-row>
      </el-col>
    </el-form>

    <el-row v-if="newsInfo.length !== 0" span="20">
      <el-table :data="newsInfo" style="width: 100%" :default-sort="{ prop: 'news_id', order: 'ascending' }" stripe>
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
    <el-dialog :visible.sync="dialogVisible" align-center center draggable width="90%">
      <template slot="title">
        <span class="news-headline">{{ headline }}</span>
      </template>
      <span class="news-content">{{ content }}</span>
    </el-dialog>
  </div>
</template>

<script>
import { mockGetConprehensiveInfo, mockGetNewsHeadlineAndContentRange, mockGetNewsContent } from '@/api/news'
import { mockGetUserIdRange } from '@/api/user'

export default {
  data() {
    return {
      userIdRange: {
        min: 0,
        max: 0
      },
      headlineLengthRange: {
        min: 0,
        max: 0
      },
      contentLengthRange: {
        min: 0,
        max: 0
      },
      form: {
        userId: '',
        startDate: '',
        endDate: '',
        minHeadlineLength: '',
        maxHeadlineLength: '',
        minContentLength: '',
        maxContentLength: ''
      },
      newsInfo: [],
      dialogVisible: false,
      headline: '',
      content: ''
    }
  },
  computed: {
    isInput() {
      // return this.form.userId !== '' && this.form.startDate !== '' && this.form.endDate !== ''
      return true
    }
  },
  mounted() {
    mockGetUserIdRange().then(res => {
      this.userIdRange.min = res.data[0].min_user_id
      this.userIdRange.max = res.data[0].max_user_id
    }).catch(err => {
      console.log(err)
    })
    mockGetNewsHeadlineAndContentRange().then(res => {
      this.headlineLengthRange.min = res.data[0].min_headline_length
      this.headlineLengthRange.max = res.data[0].max_headline_length
      this.contentLengthRange.min = res.data[0].min_content_length
      this.contentLengthRange.max = res.data[0].max_content_length
    }).catch(err => {
      console.log(err)
    })
  },
  methods: {
    search(form) {
      if (this.isInput) {
        const start_ts = Date.parse(new Date(form.startDate.replace(' ', 'T'))) / 1000
        const end_ts = Date.parse(new Date(form.endDate.replace(' ', 'T'))) / 1000
        // mock
        mockGetConprehensiveInfo(
          start_ts, end_ts,
          form.userId, form.category,
          form.minHeadlineLength, form.maxHeadlineLength,
          form.minContentLength, form.maxContentLength)
          .then(res => {
            this.newsInfo = res.data
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
.el-form-item {
  margin-left: 10px;
  margin-right: 10px;
  flex-shrink: 0;
}
.el-col > .el-row {
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

