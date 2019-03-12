<template>
  <div>
    <mt-button @click="toast" type="primary" size="large">XXXXX</mt-button>
  </div>
</template>
<script>
  import { Toast } from 'mint-ui'

  export default {
    methods: {
      toast () {
        Toast('哈哈哈')
      }
    }
  }
</script>
<style scoped>

</style>
