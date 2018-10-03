<template>
  <div class="qa-detail">
    <ul>
      <li v-for="item in data">
        <div class="title">{{item.title}}</div>
        <div class="content">{{item.content}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import {LIST_ANSWER_BY_QUESTION_ID} from '@/api_routes'

export default {
  name: 'QADetail',
  data() {
    return {
      data: []
    }
  },
  async mounted() {
    const {data} = await this.$http.get({
      url: LIST_ANSWER_BY_QUESTION_ID,
      data: {
        questionId: this.$route.query.id
      }
    })
    this.data = data.data
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/scss/qadetail";
</style>
