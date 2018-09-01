<template>
  <div class="job-detail">
    <header class="title tc fw">{{title || '湖工小站'}}</header>
    <main class="main f16" v-html="content"></main>
    <main class="main f16"></main>
  </div>
</template>

<script>
import { GET_ARTICLE_BY_ID } from '../../api_routes'
import Remarkable from 'remarkable'

export default {
  name: 'ArticleDetail',
  data () {
    return {
      title: '',
      content: '',
      type: ''
    }
  },
  mounted () {
    this.$http.get({
      url: GET_ARTICLE_BY_ID,
      data: {
        id: this.$route.params.id
      }
    })
      .then(res => {
        this.title = res.data.data.title
        this.content = res.data.data.context
        this.type = res.data.data.type
        let md = new Remarkable()
        if (!this.type) {
          this.content = md.render(res.data.data.context)
        }
      })
  }
}
</script>

<style scoped lang="scss">
  @import "../../assets/scss/jobdetail";
</style>
