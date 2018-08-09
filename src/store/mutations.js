/**
 * Creator: 鸡爪<413807584@qq.com>
 * Date: 2018/7/24
 * Time: 17:43
 */

export default {
  loginMutaion (state, loginInfo) {
    state.loginInfo = loginInfo
  },
  clearLoginMutaion (state) {
    state.loginInfo = {}
  }
}
