<template>
  <div>
    {{grandson}}
    <h2>111222</h2>
    <h1>{{$attrs['tograndson']}}</h1>
    grandson输入框：<input v-model="$attrs.tograndson" @input="cc($attrs.tograndson)" />
  </div>
</template>
<script>
  export default {
    name: 'grandson',
    data(){
      return {
        grandson: 'grandson-1111',
        aa:1
      }
    },
    methods:{
      cc(v){
        this.$emit('bbb',v)
      }
    }
  }
</script>
