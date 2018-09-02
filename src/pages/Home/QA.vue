<template>
  <div>
    <template v-if="!loading">
      <ul class="rec-container">
        <li>
          <table class="left-content">
            <tbody>
            <tr>
              <router-link class="qa-link" :to="{name: 'QADetail'}">
                <td class="ellipsis">小林:</td>
                <td class="ellipsis2">传说中的王者鸡爪，ogrk</td>
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
export default {
  name: 'QA',
  data () {
    return {
      list: []
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../assets/scss/qa";
</style>
