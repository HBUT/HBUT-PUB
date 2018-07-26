<template>
  <div id="app">
    <transition name="slide-fade">
      <div>
        <header class="head">
          <div class="logo-text">全栈工坊</div>
          <ul class="first--ul">
            <li>实习内推</li>
            <li>技术博客</li>
            <li>问答</li>
          </ul>
          <ul>
            <li><router-link :to="{name: 'Login'}">登录</router-link></li>
            <li>注册</li>
          </ul>
          <div :class="['ic ic-hanbao']" @click="toggleMenu"></div>
          <ol :class="{'animate-active': menuOn}">
            <li>实习内推</li>
            <li>技术博客</li>
            <li>问答</li>
            <li><router-link :to="{name: 'Login'}">登录</router-link></li>
            <li>注册</li>
          </ol>
        </header>
        <router-view/>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      menuOn: false
    }
  },
  methods: {
    toggleMenu () {
      this.menuOn = !this.menuOn
    }
  }
}
</script>

<style lang="scss">
  @import "assets/scss/reset";
  @import "assets/scss/app";
</style>
