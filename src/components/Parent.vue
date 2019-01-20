<template>
  <div>
    {{Parent}}<br/>
    {{toSon}}<br/>
    2-----{{tograndson}}
    <Son :toson='toSon' :tograndson='tograndson' @ccc='getchilddata' @bbb='test'></Son>
    <Brother1></Brother1>
    <Brother2></Brother2>
  </div>
</template>
<script>
import Brother1 from './Brother1.vue'
import Brother2 from './Brother2.vue'
import Son from './Son.vue'
  export default {
    name: 'parent',
    components:{Son,Brother1,Brother2},
    data(){
      return {
        Parent:'Parent',
        toSon:'tosonjdjisjdldkalskdlasdkladkaldalkd',
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
