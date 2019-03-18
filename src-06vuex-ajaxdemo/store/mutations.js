/*
* 包含n个直接更新状态数据的方法的对象
* */
export default {
  requesting (state) {
    state.tipSearch = false
    state.searching = true
  },
  requestSucces (state, users) {
    state.searching = false
    state.users = users
  },
  requestErr (state, errMsg) {
    state.searching = false
    state.errMsg = errMsg
  }
}
