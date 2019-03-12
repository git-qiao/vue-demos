<template>
  <ul>
    <li>ID-{{item.id}}</li>
    <li>TEXT-{{item.text}}</li>
    <li>TIME-{{item.time}}</li>
  </ul>
</template>
<script>
  // 模拟数据
  const items = [
    {id: 1, text: '00001', time: Date.now()},
    {id: 2, text: '00002', time: Date.now()},
    {id: 3, text: '00003', time: Date.now()},
    {id: 4, text: '00004', time: Date.now()}
  ]
  export default {
    data () {
      return {
        item: {}
      }
    },
    mounted () {
      this.setItem(this.$route)
      /* const id = this.$route.params.id * 1
      this.item = items.find(item => { return (item.id === id) }) */
    },
    watch: {
      $route: function (to, from) {
        this.setItem(to)
        /* const id = to.params.id * 1
        this.item = items.find(item => { return (item.id === id) }) */
      }
    },
    methods: {
      setItem (route) {
        const id = route.params.id * 1
        const item = items.find(item => { return (item.id === id) })
        if (item) { // item查找不到不为undefined
          this.item = item
        }
      }
    }
  }
</script>
<style scoped>

</style>
