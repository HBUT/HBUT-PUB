<template>
  <div>
    <div class="card-shadow">
      <div class="form-title">注册湖工小站</div>
      <div class="form-group-content">
        <input type="text"
               placeholder="输入用户名"
               name="userName"
               v-model="userName"
               class="ipt-txt"
               maxlength="12">
      </div>
      <div class="form-group-content">
        <input type="password"
               placeholder="输入密码"
               name="password"
               v-model="password"
               class="ipt-txt"
               maxlength="40">
      </div><div class="form-group-content">
        <input type="password"
               placeholder="确认密码"
               name="repeatPassword"
               v-model="repeatPassword"
               class="ipt-txt"
               maxlength="40">
      </div>
      <div class="form-submit">
        <div class="form-submit-btn" @click="register">注册</div>
      </div>
      <div class="hr"></div>
      <div class="form-welcome">
        欢迎各位同学&nbsp;小站君爱你哟
      </div>
    </div>
  </div>
</template>

<script>
import md5 from 'md5'
import { mapActions } from 'vuex'
import { REGISTER, LOGIN } from '../api_routes'

export default {
  name: `Register`,
  data () {
    return {
      userName: '',
      password: '',
      repeatPassword: ''
    }
  },
  mounted () {

  },
  methods: {
    ...mapActions([
      'loginAction'
    ]),
    async register () {
      if (!this.userName.trim()) {
        return alert('请输入用户名')
      }
      if (!this.password) {
        return alert('请输入密码')
      }
      if (this.password !== this.repeatPassword) {
        return alert('两次密码不一致')
      }
      const data = {
        userName: this.userName,
        password: md5(this.password)
      }
      try {
        const res = await this.$http.post({
          url: REGISTER,
          data
        })
        if (res.status === 200) {
          try {
            const loginInfo = await this.$http.post({
              url: LOGIN,
              data
            })
            this.loginAction(loginInfo.data.data)
            this.$cookie.set('user_id', loginInfo.data.data.id.toString(), {expires: 1})
            this.$cookie.set('userName', loginInfo.data.data.userName, {expires: 1})
            this.$router.push({name: 'JobList'})
          } catch (e) {
            alert(e.message)
          }
        }
      } catch (e) {
        alert(e.message)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/scss/register";
</style>
