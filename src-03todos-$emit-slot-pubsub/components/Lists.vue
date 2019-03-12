<template>
  <ul class="todo-main">
    <Todo v-for="(todo, index) in todosList" :key="index" :todo="todo" :index="index"/>
  </ul>
</template>
<script>
  import Todo from './Todo'

  export default {
    props: ['todosList'],
    components: {
      Todo
    },
    mounted () {
    }
  }
</script>
<style scoped>

</style>
