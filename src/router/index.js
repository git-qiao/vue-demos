/*
* 路由器对象模块
* */
import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes' // 引入路由配置模块

Vue.use(VueRouter)

export default new VueRouter({ // 路由器配置对象
  // 配置路由s
  routes
})
