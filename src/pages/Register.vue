<template>
  <div>
    <div class="card-shadow">
      <div class="form-title">注册湖工小站</div>
      <div class="form-group-content">
        <input type="text"
               placeholder="输入用户名"
               name="name"
               v-model="name"
               class="ipt-txt"
               maxlength="12">
      </div>
      <div class="form-group-content">
        <input type="password"
               placeholder="输入密码"
               name="firstPWD"
               v-model="firstPWD"
               class="ipt-txt"
               maxlength="40">
      </div><div class="form-group-content">
        <input type="password"
               placeholder="确认密码"
               name="password"
               v-model="password"
               class="ipt-txt"
               maxlength="40">
      </div>
      <div class="form-submit">
        <div class="form-submit-btn">登录</div>
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
export default {
  name: `Register`
}
</script>

<style scoped>

</style>
