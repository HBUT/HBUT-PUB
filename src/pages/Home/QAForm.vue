<template>
  <div class="qa-form">
    <template>
      <input type="text" class="f14" v-model="title" placeholder="请输入主题">
      <textarea v-model="content" class="f14" maxlength="420" placeholder="请输入问题内容"></textarea>
    </template>
  </div>
</template>

<script>
export default {
  name: 'QAForm',
  data () {
    return {
      title: '',
      content: ''
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../assets/scss/qaform";
</style>
