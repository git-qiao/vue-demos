<template>
  <li @mouseenter="bgChange" @mouseleave="bgChange" :style="{backgroundColor: bgColor}">
    <label>
      <input type="checkbox" v-model="todo.isChecked"/>
      <span>{{todo.content}}</span>
    </label>
    <button class="btn btn-danger" style="display:none" v-show="changeFlag" @click="deleteTodo">删除</button>
  </li>
</template>
<script>
  // 使用订阅发布进行 删除操作
  import PubSub from 'pubsub-js'

  export default {
    props: ['todo', 'index'],
    data () {
      return {
        bgColor: '#ffffff', // 标记背景色
        changeFlag: false // 结合bgColor，作为鼠标移入移出背景色变化的标识，并且作为button显示隐藏的标识
      }
    },
    methods: {
      bgChange () {
        if (!this.changeFlag) {
          this.bgColor = '#f0f0f0'
          this.changeFlag = !this.changeFlag
        } else {
          this.bgColor = '#ffffff'
          this.changeFlag = !this.changeFlag
        }
      },
      deleteTodo () {
        PubSub.publish('DELETE_TODO', this.index)
      }
    }
  }
</script>
<style scoped>
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    /*display: none;*/
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
</style>
