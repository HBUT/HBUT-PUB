<template>
  <div>
    <div class="card-shadow">
      <div class="form-title">登录湖工小站</div>
      <div class="form-group-content">
        <input type="text"
               placeholder="输入登录用户名"
               name="userName"
               v-model="userName"
               class="ipt-txt"
               maxlength="12">
      </div>
      <div class="form-group-content">
        <input type="password"
               placeholder="输入登录密码"
               name="password"
               v-model="password"
               class="ipt-txt"
               maxlength="40">
      </div>
      <div class="form-submit">
        <div class="form-submit-btn" @click="login">登录</div>
        <router-link class="form-register-btn" :to="{name: 'Register'}">还没注册？！hurry up！</router-link>
      </div>
      <div class="hr"></div>
      <div class="form-welcome">
        欢迎各位同学&nbsp;小站君爱你哟
        <br>
        希望这是个你喜欢的地方
        <br>
        提提问&nbsp;写写文&nbsp;收获一段段友谊
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { LOGIN } from '../api_routes'
import md5 from 'md5'

export default {
  name: `Login`,
  data () {
    return {
      userName: '',
      password: ''
    }
  },
  methods: {
    ...mapActions([
      'loginAction'
    ]),
    login () {
      if (!this.userName.trim()) {
        return alert('请输入用户名')
      }
      if (!this.password) {
        return alert('请输入密码')
      }
      const data = {
        userName: this.userName.trim(),
        password: md5(this.password)
      }
      this.$http.post({
        url: LOGIN,
        data
      })
        .then(res => {
          if (res.data.success) {
            this.loginAction(res.data.data)
            this.$cookie.set('user_id', res.data.data.id.toString(), { expires: 1 })
            this.$cookie.set('userName', res.data.data.userName, {expires: 1})
          } else {
            alert(res.data.message || '密码错误')
          }
        })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/scss/login";
</style>
