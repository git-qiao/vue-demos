<template>
  <ul>
    <li v-for="item in items" :key="item.id">{{item.text}}</li>
  </ul>
</template>
<script>
  export default {
    data () {
      return {
        items: [
          {id: 1, text: '000000001'},
          {id: 2, text: '000000002'},
          {id: 3, text: '000000003'},
          {id: 4, text: '000000004'}
        ]
      }
    }
  }
</script>
<style scoped>

</style>
