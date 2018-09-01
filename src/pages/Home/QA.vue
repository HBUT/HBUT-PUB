<template>
  <div>
    <template v-if="!loading">
      <ul class="rec-container" v-if="jobsFilter.length">
        <li v-for="qa in list" :key="job.id">
          <table class="left-content">
            <tbody>
            <tr>
              <td>小林：</td>
              <td></td>
              <td class="ellipsis2">
                <router-link class="job-title" :to="{name: 'JobDetail', params: {id: job.id}}">
                  传说中的王者鸡爪，ogrk
                </router-link>
              </td>
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
export default {
  name: 'QA',
  data() {
    return {
      list: [{}]
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../assets/scss/joblist";
</style>
