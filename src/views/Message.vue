<template>
  <div>
    <ul>
      <li v-for="list in lists" :key="list.id">
        <router-link :to="`/home/message/${list.id}`">{{list.text}}</router-link>
        <button @click="pushHandle(list.id)">push查看</button>
        <button @click="replaceHandle(list.id)">replace查看</button>
      </li>
    </ul>
    <button @click="$router.back()">返回</button>
    <button @click="$router.forward()">前进</button>
    <hr>
    <router-view/>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        lists: []
      }
    },
    mounted () {
      const lists = [
        {id: 1, text: '000001'},
        {id: 2, text: '000002'},
        {id: 3, text: '000003'},
        {id: 4, text: '000004'}
      ]
      // 开启定时器模拟Ajax
      setTimeout(() => {
        this.lists = lists
      }, 1000)
      console.log(this.$router)
      console.log(this.$route)
    },
    methods: {
      pushHandle (id) {
        this.$router.push(`/home/message/${id}`)
      },
      replaceHandle (id) {
        // this.$router.replace(`/home/message/${id}`)
        this.$router.replace({name: 'detail', params: {id}})
      }
    }
  }
</script>
<style scoped>
  ul li{
    margin: 10px;
  }
</style>
