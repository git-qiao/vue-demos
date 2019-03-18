/*
* 单纯配置路由对象模块
* */
import Home from '../views/Home'
import About from '../views/About'
import News from '../views/News'
import Message from '../views/Message'
import MsgDetail from '../views/MsgDetail'
import Error from '../views/Error'

export default [
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '/home/news',
        component: News
      },
      {
        path: 'message',
        component: Message,
        children: [
          {
            name: 'detail',
            path: '/home/message/:id',
            component: MsgDetail
          }
        ]
      },
      {
        path: '',
        redirect: '/home/news'
      }
    ]
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/*',
    component: Error
  }
]
