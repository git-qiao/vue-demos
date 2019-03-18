/*
* 包含n个间接更新状态数据的方法的对象
* */
import axios from 'axios'

export default {
  async search ({commit}, searchName) {
    // 状态切换为搜索...
    // this.tipSearch = false
    // this.searching = true
    commit('requesting')
    // 发起Ajax请求
    try {
      const response = await axios.get(`https://api.github.com/search/users?q=${searchName}`)
      // 请求成功
      const result = response.data.items
      if (result.length !== 0) { // 不是空数组时，显示对应的值
        const users = result.map(user => ({
          img_url: user.avatar_url,
          name: user.login,
          url: user.html_url
        }))
        // this.searching = false
        commit('requestSucces', users)
      } else { // 空数组的情况下
        const errMsg = '不存在该用户'
        commit('requestErr', errMsg)
      }
    } catch (e) {
      // 请求失败
      console.log(e)
      /* this.searching = false
      this.errMsg = '请求失败' */
      const errMsg = '请求失败'
      commit('requestErr', errMsg)
    }
  }
}
