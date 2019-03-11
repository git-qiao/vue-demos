<template>
  <div class="todo-header">
    <input @keyup.enter="add" type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="content"/>
  </div>
</template>
<script>
  export default {
    props: {
      'addTodo': Function
    },
    data () {
      return {
        content: ''
      }
    },
    methods: {
      add () {
        // 1.获取相关数据
        const {content} = this
        // 2.做基本的判断操作
        if (content.trim().length === 0) {
          alert('请输入...') // 弹框提示错误
          this.content = '' // 清空输入框
          return // 中断函数
        }
        // 3.符合上面条件后，才调用父组件传递过来的方法
        const todo = {isChecked: false, content}
        this.addTodo(todo)
        // 4.清空输入框
        this.content = ''
      }
    }
  }
</script>
<style scoped>
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }

  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }
</style>
