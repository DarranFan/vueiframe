<template>
  <div>
    兄弟组件：{{aaa}}
  </div>
</template>

<script>
import bus from './bus.js'
  export default {
    data() {
      return {
        aaa: ''
      }
    },
    methods: {
      name() {

      }
    },
    mounted(){
      bus.$on('aaaa',msg=>{
        this.aaa = msg
      })
    }
  }
</script>

<style scoped>

</style>
