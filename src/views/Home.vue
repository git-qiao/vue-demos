<template>
  <div class="home">
    <h3>Home组件</h3>
    <div class="link">
      <router-link to="/home/news">news</router-link>
      <router-link to="/home/message">message</router-link>
    </div>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>
<script>
  export default {}
</script>
<style scoped>
  .home{
    float: left;
    width: 500px;
  }
  h3{
    border-bottom: 1px solid #a0a0a0;
  }
  .link a{
    color: #555;
    background-color: #f0f0f0;
    display: inline-block;
    width: 100px;
    height: 38px;
    line-height: 38px;
    text-align: center;
    text-decoration: none;
  }
</style>
