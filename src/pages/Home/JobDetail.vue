<template>
  <div class="job-detail">
    <header class="title tc fw">{{title || 'test'}}</header>
    <main class="main f16" v-html="content"></main>
  </div>
</template>

<script>
export default {
  name: 'JobDetail',
  data () {
    return {
      title: '',
      content: '<div>123</div>'
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../assets/scss/jobdetail";
</style>
