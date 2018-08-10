<template>
  <div id="app">
    <transition name="slide-fade">
      <div>
        <header class="head">
          <div class="logo-text">湖工小站</div>
          <ul class="first--ul">
            <li><router-link class="color-f" :to="{name: 'JobList'}">实习内推</router-link></li>
            <li>技术博客</li>
            <li>问答</li>
            <li>表白墙</li>
          </ul>
          <ul v-if="!loginName">
            <li><router-link class="color-f" :to="{name: 'Login'}">登录</router-link></li>
            <li><router-link class="color-f" :to="{name: 'Register'}">注册</router-link></li>
          </ul>
          <ul v-else>
            <li>{{loginName}}</li>
          </ul>
          <div :class="['ic ic-hanbao']" @click="toggleMenu"></div>
          <ol :class="{'animate-active': menuOn}">
            <li>实习内推</li>
            <li>技术博客</li>
            <li>问答</li>
            <li>表白墙</li>
            <template v-if="!loginName">
              <li><router-link class="color-f" :to="{name: 'Login'}">登录</router-link></li>
              <li><router-link class="color-f" :to="{name: 'Register'}">注册</router-link></li>
            </template>
            <template v-else>
              <li>{{loginName}}</li>
            </template>
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
  created () {
    this.$router.replace({name: 'JobList'})
  },
  computed: {
    loginName () {
      return this.$store.state.loginInfo.userName || this.$cookie.get('userName')
    },
    loginInfo () {
      return this.$store.state.loginInfo
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
