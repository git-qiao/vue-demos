<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <AddTodos @addTodo="addTodo"/> <!--使用自定义事件-->
        <Lists :todosList="todosList"/>
        <Footer>
          <input type="checkbox" v-model="isAllChecked" slot="left"/>
          <span slot="middle">
            <span>已完成{{num}}</span> / 全部{{todosList.length}}
          </span>
          <button class="btn btn-danger" @click="deleteDoneTodo" slot="right">清除已完成任务</button>
        </Footer>
        <!--<Footer :todosList="todosList" :deleteDoneTodo="deleteDoneTodo" :footerSelect="footerSelect"/>-->
      </div>
    </div>
  </div>
</template>

<script>
  import PubSub from 'pubsub-js'
  // import axios from 'axios'
  import {getTodos, setTodos} from './utils/storageUtil'

  import AddTodos from './components/AddTodos'
  import Footer from './components/Footer'
  import Lists from './components/Lists'

  export default {
    data () {
      return {
        todosList: [
          {isChecked: false, content: 'aaaaaaa'},
          {isChecked: true, content: 'bbbbbbb'},
          {isChecked: false, content: 'ccccccc'}
        ]
      }
    },
    components: {
      AddTodos,
      Lists,
      Footer
    },
    methods: { // 数据在哪儿，操作数据的函数就应该在哪儿
      addTodo (todo) {
        this.todosList.unshift(todo)
      },
      deleteTodo (index) {
        this.todosList.splice(index, 1)
      },
      deleteDoneTodo () {
        // 只有存在选中的项时，才会删除数据
        const {todosList} = this
        const newTodosList = this.todosList.filter((todo, index) => {
          return todo.isChecked === false
        })
        if (todosList.length !== newTodosList.length) {
          this.todosList = newTodosList
        } else {
          alert('请选中要删除的选项')
        }
      },
      footerSelect (val) {
        // 设置的时候，同样需要更新每一项的 isChecked
        const {todosList} = this
        todosList.map(todo => {
          if (todosList.length === 0) {
            todo.isChecked = false
          } else {
            todo.isChecked = val
          }
        })
      }
    },
    mounted () {
      // 进行读取
      this.todosList = getTodos()
      // 刚上来进行缓存
      setTodos(this.todosList)
      // localStorage.setItem('todos_key', JSON.stringify(this.todosList))

      // 订阅
      PubSub.subscribe('DELETE_TODO', (msg, data) => {
        this.deleteTodo(data) // 注意，vue或者组件控制的回调函数，this指向vm实例或者组件对象，但是这里的this不用箭头函数会指向PubSub
      })
    },
    watch: {
      todosList: {
        /* handler: function(newVal, oldVal) { // 监听值的变化实时往内存进行存储
          setTodos(newVal)
          // localStorage.setItem('todos_key', JSON.stringify(newVal))
        }, */
        // 简写
        handler: setTodos,
        deep: true
      }
    },
    computed: {
      isAllChecked: {
        get () {
          // 只有每一项都被选中时，总的才会被选中
          const {todosList} = this
          if (todosList.length) {
            const res = todosList.every(todo => {
              return todo.isChecked === true
            })
            if (res) {
              return true
            } else {
              return false
            }
          }
          return false
        },
        set (value) {
          this.footerSelect(value)
        }
      },
      num () {
        return this.todosList.reduce((pre, todo) => {
          return pre + (todo.isChecked === true ? 1 : 0)
        }, 0)
      }
    }
  }
</script>

<style scoped>

</style>
