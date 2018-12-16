<template>
  <div>
    {{son}}
    <GrandSon v-bind="$attrs" v-on="$listeners"></GrandSon>
    {{toson}}
    <input @input = 'aa(reparent)' v-model="reparent" />
  </div>
</template>
<script>
  import GrandSon from './GrandSon.vue'
  export default {
    name: 'son',
    components:{GrandSon},
    props:['toson'],
    data(){
      return {
        son: 'son',
        reparent:''
      }
    },
    methods:{
      aa(v){
        this.$emit('ccc',v)
      }
    }
  }
</script>
