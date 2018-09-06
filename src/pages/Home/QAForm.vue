<template>
  <div>
    <input type="text" v-model="title">
    <textarea v-model="content" maxlength="300"></textarea>
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
