<template>
  <div>
    <template v-if="!loading">
      <ul class="rec-container">
        <li>
          <table class="left-content">
            <tbody>
            <tr>
              <router-link class="qa-link" :to="{name: 'QADetail'}">
                <td class="ellipsis">{{item.title}}</td>
                <td class="ellipsis2">{{item.content}}</td>
              </router-link>
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
      page: 1
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
      const {data} = await this.$http.get({
        url: LIST_QUESTION_BY_TYPE,
        data: {
          pageIndex: this.page,
          pageSize: 15
        }
      })
    },
    loadMore() {

    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../assets/scss/qa";
</style>
