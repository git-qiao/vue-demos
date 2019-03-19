<template>
  <div>
    <h2 v-if="tipSearch">请输入搜索的内容</h2>
    <h2 v-else-if="searching">正在搜索...</h2>
    <h2 v-else-if="errMsg">{{errMsg}}</h2>
    <div v-else class="row">
      <div class="card" v-for="(user, index) in users" :key="index">
        <a :href="user.url" target="_blank">
          <img :src="user.img_url" style='width: 100px'/>
        </a>
        <p class="card-text">{{user.name}}</p>
      </div>
    </div>
  </div>
</template>
<script>
  // import Pubsub from 'pubsub-js'
  // import axios from 'axios'
  import {mapState} from 'vuex'

  export default {
    data () {
      return {

      }
    },
    computed: {
      ...mapState(['tipSearch', 'searching', 'errMsg', 'users'])
    },
    mounted () {
      // 开启异步任务 -- 发送Ajax请求/开启定时器/绑定自定义事件监听
      /*Pubsub.subscribe('SEARCH_NAME', async (msg, searchName) => {
        // 状态切换为搜索...
        this.tipSearch = false
        this.searching = true
        // 发起Ajax请求
        try {
          const response = await axios.get(`https://api.github.com/search/users?q=${searchName}`)
          // 请求成功
          const result = response.data.items
          this.searching = false
          if (result.length !== 0) { // 不是空数组时，显示对应的值
            this.users = result.map(user => ({
              img_url: user.avatar_url,
              name: user.login,
              url: user.html_url
            }))
          } else { // 空数组的情况下
            this.errMsg = '不存在该用户！！'
          }
        } catch (e) {
          // 请求失败
          console.log(e)
          this.searching = false
          this.errMsg = '请求失败'
        }
      })*/
    }
  }
</script>
<style scoped>
  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }
</style>
