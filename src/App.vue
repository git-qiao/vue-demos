<template>
  <div class="container">
    <h1>路由组件小例子。。。</h1>
    <div class="left">
      <router-link to="/home">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <!--路由匹配到的组件将被渲染到这里-->
    <!--缓存路由组件对象-->
    <keep-alive>
      <router-view :msg="msg"/>
    </keep-alive>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        msg: 'XXXXX'
      }
    }
  }
</script>
<style scoped>
  .container{
    width: 800px;
    margin: 100px auto;
    border: 1px solid #e0e0e0;
  }
  .left{
    float: left;
    width: 100px;
    margin-right: 40px;
  }
  .left a{
    display: block;
    width: 100%;
    height: 38px;
    line-height: 38px;
    border: 1px solid darkred;
    margin-bottom: 2px;
    text-align: center;
    color: darkred;
    text-decoration: none;
  }
</style>
