<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isAllChecked"/>
    </label>
    <span>
          <span>已完成{{num}}</span> / 全部{{todosList.length}}
        </span>
    <button class="btn btn-danger" @click="deleteDoneTodo">清除已完成任务</button>
  </div>
</template>
<script>
  export default {
    props: {
      deleteDoneTodo: {
        type: Function,
        required: true
      },
      todosList: Array,
      footerSelect: Function
    },
    data () {
      return {

      }
    },
    // 根据传递过来的todosList中每一项的isChecked来确定，checkbox是否需要选中
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
    },
    mounted () {
      console.log(this.todosList)
    }
  }
</script>
<style scoped>
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>
