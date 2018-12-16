<template>
  <div>
    {{Parent}}<br/>
    {{toSon}}<br/>
    2-----{{tograndson}}
    <Son :toson='toSon' :tograndson='tograndson' @ccc='getchilddata' @bbb='test'></Son>
  </div>
</template>
<script>
import Son from './Son.vue'
  export default {
    name: 'parent',
    components:{Son},
    data(){
      return {
        Parent:'Parent',
        toSon:'toson',
        tograndson:'tograndson'
      }
    },
    methods:{
      getchilddata(v){
        this.toSon = v
      },
      test(v){
        this.tograndson = v
      }
    }
  }
</script>
