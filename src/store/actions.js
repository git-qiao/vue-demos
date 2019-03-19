// actions 存储n个间接操作状态数据方法的对象
// import axios from 'axios'

import {reqSearch} from '../api'
import {SEARCHING, SUCC, ERR} from './mutation-types'

export default {
  async search ({commit}, searchName) {
    // 状态切换为搜索...
    commit(SEARCHING)
    // 发起Ajax请求
    try {
      const response = await reqSearch(searchName)
      console.log(response)
      // 请求成功
      const result = response.items
      console.log(result)
      if (result.length !== 0) { // 不是空数组时，显示对应的值
        const users = result.map(user => ({
          img_url: user.avatar_url,
          name: user.login,
          url: user.html_url
        }))
        commit(SUCC, {users})
      } else { // 空数组的情况下
        const errMsg = '不存在该用户！！'
        commit(ERR, {errMsg})
      }
    } catch (e) {
      // 请求失败
      const errMsg = '请求失败'
      commit(ERR, {errMsg})
    }
  }
}
