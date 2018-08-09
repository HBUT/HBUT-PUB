/**
 * Creator: 鸡爪<413807584@qq.com>
 * Date: 2018/7/24
 * Time: 17:43
 */

/**
 * 登录全局信息
 * @param commit
 * @param loginInfo
 */
export const loginAction = function ({commit}, loginInfo) {
  commit('loginMutation', loginInfo)
}

/**
 * 清理登录全局信息
 * @param commit
 */
export const clearLoginAction = function ({commit}) {
  commit('clearLoginMutaion')
}
