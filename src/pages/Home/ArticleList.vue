<template>
  <div>
    <template v-if="!loading">
      <ul class="rec-container" v-if="jobsFilter.length">
        <li v-for="article in jobsFilter" :key="article.id">
          <table class="left-content">
            <tbody>
            <tr>
              <td>{{article.likeCount}}</td>
              <td>{{article.pv}}</td>
              <td class="ellipsis2">
                <router-link class="job-title" :to="{name: 'JobDetail', params: {id: article.id}}">
                  {{article.title}} | {{article.summary}}
                </router-link>
              </td>
            </tr>
            <tr>
              <td>赞数</td>
              <td>点击量</td>
              <td>{{article.username || '匿名用户'}}</td>
            </tr>
            </tbody>
          </table>
        </li>
      </ul>
      <div class="loading" @click="loadMore" v-if="!nomore">加载更多</div>
      <div class="loading" v-if="nomore">没有更多了</div>
    </template>
    <template v-else>
      <div class="loading">加载中</div>
    </template>
  </div>
</template>

<script>
import {LIST_ARTICLE_BY_TYPE} from '../../api_routes'

export default {
  name: 'ArticleList',
  data () {
    return {
      loading: true,
      articleList: [],
      searchOptions: {
        typeId: 0,
        pageIndex: 1,
        pageSize: 20
      },
      nomore: false,
      publishBtn: false
    }
  },
  mounted () {
    this.initParams()
    this.fetchData()
  },
  computed: {
    jobsFilter () {
      return this.articleList.map((item) => {
        if (item.pv > 999) {
          item.pv = '999+'
        }
        if (item.upvote_count > 999) {
          item.upvote_count = '999+'
        }
        return item
      })
    }
  },
  methods: {
    fetchData () {
      this.$http.get({
        url: LIST_ARTICLE_BY_TYPE,
        data: this.searchOptions
      })
        .then(res => {
          console.log(res)
          let list = res.data.data.dataList
          this.articleList = [...this.articleList, ...list]
          let actualCount = list.length + (res.data.data.pageIndex - 1) * res.data.data.pageSize
          this.nomore = actualCount >= res.data.data.totalCount
          this.loading = false
        })
    },
    loadMore () {
      this.searchOptions.pageIndex += 1
      this.fetchData()
    },
    initParams () {
      this.articleList = []
      this.searchOptions = {
        typeId: 0,
        pageIndex: 1,
        pageSize: 20
      }
    }
  }

}
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/joblist";
</style>
