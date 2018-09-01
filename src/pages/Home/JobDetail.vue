<template>
  <div class="job-detail">
    <header class="title tc fw">{{title || 'test'}}</header>
    <main class="main f16" v-html="content" v-if="type"></main>
    <main class="main f16"></main>
  </div>
</template>

<script>
import { GET_PRACTICE_BY_ID } from '../../api_routes'

export default {
  name: 'JobDetail',
  data () {
    return {
      title: '',
      content: '',
      type: 1
    }
  },
  mounted () {
    this.$http.get({
      url: GET_PRACTICE_BY_ID,
      data: {
        id: this.$route.query.id
      }
    })
      .then(res => {
        this.title = res.data.data.jobTitle
        this.content = res.data.data.jobRequire
      })
  }
}
</script>

<style scoped lang="scss">
  @import "../../assets/scss/jobdetail";
</style>
