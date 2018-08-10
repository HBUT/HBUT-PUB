<template>
  <div>
    <template v-if="!loading">
      <ul class="rec-container" v-if="jobsFilter.length">
        <li v-for="job in jobsFilter" :key="job.id">
          <table class="left-content">
            <tbody>
              <tr>
                <td>{{job.upvote_count}}</td>
                <td>{{job.pv}}</td>
                <td class="ellipsis2">
                  <router-link class="job-title" :to="{name: 'JobDetail'}">
                    {{job.title}}
                  </router-link>
                </td>
              </tr>
              <tr>
                <td>赞数</td>
                <td>点击量</td>
                <td>{{job.username}}</td>
              </tr>
            </tbody>
          </table>
        </li>
      </ul>
    </template>
    <template v-else>
      <div class="loading">加载中</div>
    </template>
  </div>
</template>

<script>
import { LIST_PRACTICE_BY_TYPE } from '../../api_routes'

export default {
  name: 'Recommend',
  data () {
    return {
      loading: true,
      jobs: [
        {
          id: 0,
          title: '很长很长一段文字很长很长一段文字很长很长一段文字很长很长一段文字很长很长一段文字很长很长一段文字很长很长一段文字很长很长一段文字很长很长一段文字很长很长一段文字很长很长一段文字很长很长一段文字！！！很长很长一段文字！！！很长很长一段文字！！！很长很长一段文字！！！很长很长一段文字！！！很长很长一段文字！！！',
          username: '湖工小站君',
          pv: 10,
          upvote_count: 5
        },
        {
          id: 1,
          title: '很长很长一段文字！！！很长很长一段文字！！！很长很长一段文字！！！很长很长一段文字！！！很长很长一段文字！！！很长很长一段文字！！！',
          username: '湖工小站君',
          pv: 9999,
          upvote_count: 6
        }
      ],
      searchOptions: {
        typeId: 0,
        pageIndex: 0,
        pageSize: 20
      }
    }
  },
  mounted () {

  },
  computed: {
    jobsFilter () {
      return this.jobs.map((item) => {
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
        url: LIST_PRACTICE_BY_TYPE,
        data: this.searchOptions
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/joblist";
</style>
