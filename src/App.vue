<template>
  <div id="app">
    <transition name="slide-fade">
      <div>
        <header class="head">
          <div class="logo-text">湖工小站</div>
          <ul class="first--ul">
            <li>实习内推</li>
            <li>技术博客</li>
            <li>问答</li>
            <li>表白墙</li>
          </ul>
          <ul>
            <li v-if="!isLogin"><router-link class="color-f" :to="{name: 'Login'}">登录</router-link></li>
            <li v-if="!isLogin">注册</li>
          </ul>
          <div :class="['ic ic-hanbao']" @click="toggleMenu"></div>
          <ol :class="{'animate-active': menuOn}">
            <li>实习内推</li>
            <li>技术博客</li>
            <li>问答</li>
            <li>表白墙</li>
            <li v-if="!isLogin"><router-link class="color-f" :to="{name: 'Login'}">登录</router-link></li>
            <li v-if="!isLogin">注册</li>
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
  computed: {
    isLogin () {
      return this.$store.state.isLogin
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
