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
            <li>登录</li>
            <li>注册</li>
          </ul>
          <div class="ic ic-hanbao"></div>
        </header>
        <router-view/>
      </div>
    </transition>
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

  .head {
    height: 60px;
    background: rgba(0, 0, 0, .9);
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    .ic-hanbao {
      display: none;
    }
  }

  .head > ul {
    display: flex;
    align-items: center;
    li {
      margin: 5px;
    }
  }

  .logo-text {
    width: 135px;
    text-align: center;
    font-size: 26px;
  }

  .first--ul + ul {
    padding-right: 10px;
  }

  @media (max-width: 415px) {
    .head > ul {
      display: none;
    }

    .head {
      justify-content: center;
      position: relative;
      .ic-hanbao {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        display: block;
        font-size: 26px;
      }
    }
  }

</style>
