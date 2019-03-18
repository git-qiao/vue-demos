<template>
  <div>
    <h1>数字为： {{num}}，类型是： {{type}}</h1>
    <select name="num" v-model="addNum">
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
    data () {
      return {
        num: 0,
        addNum: 1
      }
    },
    computed: {
      type () {
        return this.num % 2 === 0 ? '偶数' : '奇数'
      }
    },
    methods: {
      increment () {
        this.num += +this.addNum
      },
      decrement () {
        this.num -= +this.addNum
      },
      incrementIfOdd () {
        if (this.num % 2 === 1) {
          this.num += +this.addNum
        } else {
          alert('温馨提示：数据为偶数的情况不能加减')
        }
      },
      incrementAsync () {
        setTimeout(() => {
          this.num += +this.addNum
        }, 1000)
      }
    }
  }
</script>

<style>

</style>
