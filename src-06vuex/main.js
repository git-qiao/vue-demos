import Vue from 'vue'
import App from './App'

import store from './store/store'

// 设置为 false 以阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App }, /* 注册组件 */
  template: '<App/>',
  store // 挂载store状态  --》 所有组件对象都有一个属性$store
})
