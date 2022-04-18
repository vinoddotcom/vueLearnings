<template>
<h4>{{rank}}</h4>
  <p>The Reaction Time is "{{score}} ms"</p>
</template>

<script>
export default {
props:["score"],

data(){
    return{
     rank:null,
    }
},
mounted(){ 
  if(this.score<250){
      this.rank = 'ninja fingure'
  }else if(this.score< 400){
      this.rank = 'Rapid Reflexes'
  }else {
      this.rank = 'Snal pace...'
  }
}
}
</script>

<style>

</style>