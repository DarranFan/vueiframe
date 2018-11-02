<template>
  <div class="hello1">
    <h1 @click="getInfo">{{ msg }}</h1>
    <el-button type="primary" @click="turnSku">Sku</el-button>
    <el-button type="primary" @click="turnSku1">Upload</el-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld1',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    this.getInfo()
  },
  methods:{
    getInfo(){
      this.$http.get(this.URL.Get_book_info).then(data=>{
        console.log(data)
      })
    },
    turnSku(){
      this.$router.push({path:'/Sku'})
    },
    turnSku1(){
      this.$router.push({path:'/Upload'})
    }
  }
}
</script>

<style>

</style>
