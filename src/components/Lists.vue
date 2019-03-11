<template>
  <ul class="todo-main">
    <Todo v-for="(todo, index) in todosList" :key="index" :todo="todo" :deleteTodo="deleteTodo" :index="index"/>
  </ul>
</template>
<script>
  import Todo from './Todo'

  export default {
    props: ['todosList', 'deleteTodo'],
    components: {
      Todo
    },
    mounted () {
    }
  }
</script>
<style scoped>

</style>
