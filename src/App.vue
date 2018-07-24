<template>
  <div id="app">
    <transtion name="slide-fade">
      <header>
        <div>全栈工坊</div>
        <ul>
          <li>技术博客</li>
          <li>问答</li>
          <li>实习内推</li>
        </ul>
        <ul>
          <li>登录</li>
          <li>注册</li>
        </ul>
      </header>
      <router-view/>
    </transtion>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  @import "assets/scss/reset";

  .slide-fade-enter-active {
    transition: all .3s ease;
  }

  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-enter, .slide-fade-leave-active {
    transform: translateX(-430px);
    opacity: 0;
  }
</style>
