<template>
  <div id="app">
    <div class="container">
      <Search/>
      <Container/>
    </div>
  </div>
</template>

<script>
  import Search from './components/Search'
  import Container from './components/Container'
  export default {
    components: {Search, Container},
    data () {
      return {

      }
    }
  }
</script>

<style scoped>

</style>
