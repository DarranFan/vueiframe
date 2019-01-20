<template>
  <div>
    <input v-model="a" @input='test' />
  </div>
</template>

<script>
import bus from './bus.js'
  export default {
    data() {
      return {
        a: '111111'
      }
    },
    methods: {
      test() {
        bus.$emit('aaaa',this.a)
      }
    },
  }
</script>

<style scoped>

</style>
