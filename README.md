## 数据在哪儿，操作数据的方法就应该在哪儿！！！！！！！
## 自定义事件的监听和绑定
   * 绑定事件监听  事件名/回调
   * 事件的触发(emit)/发布(dispatch)   事件名/数据
## DOM事件
   * 绑定事件监听  事件名/回调
   * 用户操作触发事件   事件名/数据（event就是包含所有数据的一个对象）
## vue中的自定义事件的绑定和监听
   * v-on:xx='fn'  父组件-->子组件 绑定在子组件上
   * this.$emit('xx', data)   子组件进行事件的触发/发布
## vue或者组件控制的回调函数，this指向vm实例或者组件对象
## ajax请求练习接口 -- https://api.github.com/search/users?q=aa

