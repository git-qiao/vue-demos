/*
* 包含n个直接更新状态数据的方法的对象
* */
import {REQUESTING, REQUESTSUCCES, REQUESTERR} from './mutation-types'
export default {
  // 请求中
  [REQUESTING] (state) {
    state.tipSearch = false
    state.searching = true
  },
  // 请求成功
  [REQUESTSUCCES] (state, users) {
    state.searching = false
    state.users = users
  },
  // 请求失败
  [REQUESTERR] (state, errMsg) {
    state.searching = false
    state.errMsg = errMsg
  }
}
