import Vue from 'vue'

import App from './App'

import router from './router'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {App},
  template: '<App/>',
  router // 配置路由器
})

/* eslint-disable no-new */
/*
* 路由： key-value的映射
* 路由器： 一个应用有一个路由器，多个路由
* 拆路由：
*   1.路由组件显示区域
*   2.一级路由/二级路由...
* */
