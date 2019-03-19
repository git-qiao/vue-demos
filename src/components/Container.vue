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
  import {mapState} from 'vuex'

  export default {
    /*mounted () {
      // 开启异步任务 -- 发送Ajax请求/开启定时器/绑定自定义事件监听
      Pubsub.subscribe('SEARCH_NAME', async (msg, searchName) => {

      })
    }*/
    computed: {
      ...mapState(['tipSearch', 'searching', 'errMsg', 'users'])
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
