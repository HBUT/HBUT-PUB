<template>
  <div>
    <template v-if="!loading">
      <ul class="rec-container">
        <li v-for="item in list">
          <table class="left-content">
            <tbody>
            <tr>
              <router-link class="qa-link" :to="{name: 'QADetail', query: {id: item.id}}">
                <td class="ellipsis title">{{item.title}}</td>
                <td class="ellipsis2">{{item.content}}</td>
              </router-link>
            </tr>
            </tbody>
          </table>
        </li>
      </ul>
      <div class="loading" @click="loadMore" v-if="more">加载更多</div>
      <div class="loading" v-else>没有更多了</div>
    </template>
    <template v-else>
      <div class="loading">加载中</div>
    </template>
    <div class="publish" @click="publish">+</div>
  </div>
</template>

<script>
import {LIST_QUESTION_BY_TYPE} from '@/api_routes'
export default {
  name: 'QA',
  data () {
    return {
      list: [],
      page: 1,
      more: true,
      loading: true
    }
  },
  mounted () {
    this.next()
  },
  methods: {
    publish () {
      this.$router.push({name: 'QAForm'})
    },
    async next () {
      this.loading = true
      const {data} = await this.$http.get({
        url: LIST_QUESTION_BY_TYPE,
        data: {
          pageIndex: this.page,
          pageSize: 15
        }
      })

      this.list = data.data.dataList
      this.loading = false
      if (data.totalCount < 15) {
        this.more = false
      } else {
        this.more = data.data.totalCount > data.data.pageSize * data.data.pageIndex + data.data.dataList.length
      }
    },
    loadMore () {
      if (this.more) {
        this.page += 1
        this.next()
      }
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../assets/scss/qa";
</style>
