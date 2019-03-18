/*
* Vuex最核心的管理（状态数据）对象store
* */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 相当于data的对象
const state = {
  num: 0,
  n: 1
}

// 包含n个直接更新状态数据的方法的对象
const mutations = {
  INCREMENT (state) { // 参数1：state对象 参数2：可选[payload]
    state.num += +state.n
  },
  DECREMENT (state) {
    state.num -= +state.n
  }
}

// 包含n个间接更新状态数据的方法的对象
const actions = {
  // increment({commit(){}})
  increment ({commit}) { // 参数1：默认是一个store对象
    commit('INCREMENT')
  },
  decrement ({commit}) {
    commit('DECREMENT')
  },
  // incrementIfOdd({commit(){}, state})
  incrementIfOdd ({commit, state}) {
    if (state.num % 2 !== 0) {
      commit('INCREMENT')
    }
  },
  incrementAsync ({commit}) { // vuex本身就支持异步
    setTimeout(() => {
      commit('INCREMENT')
    }, 1000)
  }
}

// 包含n个getter计算属性方法的对象
const getters = {
  type (state) {
    return state.num % 2 === 0 ? '偶数' : '奇数'
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
