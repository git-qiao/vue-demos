// mutations 存储n个直接操作状态数据方法的对象
import {SEARCHING, SUCC, ERR} from './mutation-types'

export default { // 包含三个直接操作状态数据的函数
  [SEARCHING] (state) {
    // 搜索中的回调
    state.tipSearch = false
    state.searching = true
  },
  [SUCC] (state, {users}) {
    // 成功的回调
    state.searching = false
    state.users = users
  },
  [ERR] (state, {errMsg}) {
    // 失败/无数据的回调
    state.searching = false
    state.errMsg = errMsg
  }
}
