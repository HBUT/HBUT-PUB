<template>
  <div>
    <router-view :key="$route.path"></router-view>
  </div>
</template>

<script>
export default {
  name: `Home`
}
</script>

<style scoped lang="scss">
  @import "../../assets/scss/home";
</style>
