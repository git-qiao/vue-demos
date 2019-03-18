<template>
  <div>
    <h3>About组件---{{msg}}</h3>
    <input type="text">
  </div>
</template>
<script>
  export default {
    props: {
      msg: String,
      text: ''
    }
  }
</script>
<style scoped>

</style>
