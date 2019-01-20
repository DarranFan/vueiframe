<template>
  <div class="hello1">
    <h1 @click="getInfo">{{ msg }}</h1>
    <el-button type="primary" @click="turnSku">Sku</el-button>
    <el-button type="primary" @click="turnSku1">Upload</el-button>
    <el-button type="primary" @click="turnSku2">CombindTable</el-button>
    <Input :test='test' />
    <div v-for="(item,index) in aa" :key="index">
      <el-radio-group v-model="item.radio2">
        <el-radio :label="true">Yes</el-radio>
        <el-radio :label="false">No</el-radio>
      </el-radio-group>
    </div>
  </div>
</template>

<script>
  import Input from './Input'
  export default {
    name: 'HelloWorld1',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        test: 'fdfd',
        aa: [
          {radio2: false},
          {radio2: false},
          {radio2: false},
          {radio2: false}
        ]
      }
    },
    components: {
      Input
    },
    mounted() {
      this.getInfo()
    },
    methods: {
      getInfo() {
        this.$http.get(this.URL.Get_book_info).then(data => {
          console.log(data)
        })
      },
      turnSku() {
        this.$router.push({
          path: '/Sku'
        })
      },
      turnSku1() {
        this.$router.push({
          path: '/Upload'
        })
      },
      turnSku2() {
        this.$router.push({
          path: '/CombindTable'
        })
      }
    }
  }
</script>

<style>

</style>
