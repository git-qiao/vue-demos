<template>
  <div>
    <h1>数字为： {{$store.state.num}}，类型是： {{$store.getters.type}}</h1>
    <select name="num" v-model="$store.state.n">
      <option value="1">1</option>
      <option value="3">3</option>
      <option value="10">10</option>
    </select>
    <button @click="increment">加</button>
    <button @click="decrement">减</button>
    <button @click="incrementIfOdd">奇数</button>
    <button @click="incrementAsync">等待1s开始加</button>
  </div>
</template>

<script>
  export default {
    methods: {
      increment () {
        this.$store.dispatch('increment')
      },
      decrement () {
        this.$store.dispatch('decrement')
      },
      incrementIfOdd () {
        this.$store.dispatch('incrementIfOdd')
      },
      incrementAsync () {
        this.$store.dispatch('incrementAsync')
      }
    },
    mounted () {
      console.log(this.$store)
    }
  }
</script>

<style>

</style>
