<template>
  <div>
    <h1>------</h1>
    <HelloWorld/>
    <Abc/>
    <img src="./assets/logo.png" alt="logo">
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld'
  import Abc from './components/Abc'

  export default {
    components: {
      HelloWorld,
      Abc
    }
  }
</script>

<style>

</style>
