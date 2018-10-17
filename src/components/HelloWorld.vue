
<template>
  <div class="hello1">
    <h1 @click="getInfo">{{ msg }}</h1>
    <el-button type="primary" @click="turnSku">主要按钮</el-button>
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
  methods:{
    getInfo(){
      this.$http.get(this.URL.Get_book_info).then(data=>{
        
        console.log(data)
      })
    },
  }
}
</script>

<style>
  .el-tree-node__content{
    height: 60px;
  }
  .line{
    /* background-color: pink; */
    border-top:1px solid #333;
    height: 60px;
    width: 100%;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
  }
</style>
