<template>
  <div>
    <el-input v-model="aaa"></el-input>
  </div>
</template>
<script>
export default {
  data() {
    return {
      aaa: this.test
    }
  },
  props: {
    test:{
      type:String
    }
  }
}
</script>
<style scoped>

</style>


