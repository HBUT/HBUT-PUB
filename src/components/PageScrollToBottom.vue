<template>

</template>

<script>
export default {
  name: 'PageScrollToBottom',
  props: {
    fetchList: Function,

  },
  methods: {
    getScrollTop () {
      var scrollTop = 0
      if (document.documentElement && document.documentElement.scrollTop) {
        scrollTop = document.documentElement.scrollTop
      } else if (document.body) {
        scrollTop = document.body.scrollTop
      }
      return scrollTop
    }
  }
}
</script>

<style scoped>

</style>
