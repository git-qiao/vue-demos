<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <AddTodos :addTodo="addTodo"/>
        <Lists :todosList="todosList" :deleteTodo="deleteTodo"/>
        <Footer :todosList="todosList" :deleteDoneTodo="deleteDoneTodo"/>
      </div>
    </div>
  </div>
</template>

<script>
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
        // 只有存在选中的项时，才更改数据
        const {todosList} = this
        const newTodosList = this.todosList.filter((todo, index) => {
          return todo.isChecked === false
        })
        if (todosList.length !== newTodosList.length) {
          this.todosList = newTodosList
        } else {
          alert('请选中要删除的选项')
        }
      }
    },
    mounted () {
      // 进行读取
      this.todosList = JSON.parse(localStorage.getItem('todos_key') || '[]')
      // 刚上来进行缓存
      localStorage.setItem('todos_key', JSON.stringify(this.todosList))
    },
    watch: {
      todosList: {
        handler: function(newVal, oldVal) { // 监听值的变化实时往内存进行存储
          localStorage.setItem('todos_key', JSON.stringify(this.todosList))
        },
        deep: true
      }
    }
  }
</script>

<style scoped>

</style>
