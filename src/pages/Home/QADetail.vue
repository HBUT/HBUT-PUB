<template>
  <div class="qa-detail">
    <ul class="question">
      <li>
        <div class="title">{{data.question.title}}</div>
        <div class="content">{{data.question.content}}</div>
      </li>
    </ul>
    <ul class="answer">
      <li v-for="(item, index) in data.answers" :key="index">
        <div class="content">{{item.content}}</div>
      </li>
    </ul>
    <div class="publish" @click="publish">+</div>
  </div>
</template>

<script>
import {LIST_ANSWER_BY_QUESTION_ID} from '@/api_routes'

export default {
  name: 'QADetail',
  data () {
    return {
      data: {}
    }
  },
  async mounted () {
    const {data} = await this.$http.get({
      url: LIST_ANSWER_BY_QUESTION_ID,
      data: {
        questionId: this.$route.query.id
      }
    })
    this.data = data.data
  },
  methods: {
    publish () {
      this.$router.push({name: 'QAForm', query: {id: this.data.question.id}})
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/scss/qadetail";
</style>
