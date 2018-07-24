/**
 * Creator: 鸡爪<413807584@qq.com>
 * Date: 2018/7/24
 * Time: 17:29
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  currentThreadID: null,
  threads: {
    /*
    id: {
      id,
      name,
      messages: [...ids],
      lastMessage
    }
    */
  },
  messages: {
    /*
    id: {
      id,
      threadId,
      threadName,
      authorName,
      text,
      timestamp,
      isRead
    }
    */
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
