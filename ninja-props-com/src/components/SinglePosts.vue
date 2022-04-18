<template>
<router-link :to="{name: 'Details', params: {id:singlePosts.id}}">
    <h3>{{ singlePosts.title }}</h3>
</router-link>
  
  <p>{{snippet}}</p>
  <span v-for="tag in singlePosts.tags" :key="tag">
     #{{tag}}
  </span>
</template>

<script>
import { computed } from '@vue/runtime-core'
export default {
  component: { },
  props: ["singlePosts"],
  setup(props){ 
   const snippet = computed(()=>{
       return props.singlePosts.body.substring(0,100) + '...'
   })
   return {snippet}
  },
  
}
</script>


<style>

</style>