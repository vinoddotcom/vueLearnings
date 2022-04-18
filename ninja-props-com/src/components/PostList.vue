<template>
  <div class="post-list"></div>
  <div v-for="post in posts" :key="post.id">
    
      <SinglePosts :singlePosts="post"></SinglePosts>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated  } from '@vue/runtime-core'
import SinglePosts from './SinglePosts.vue'

export default {
    props: ['posts'],
    components: { SinglePosts },
    setup(){
      onMounted(()=>{console.log('component Mounted')});
      onUnmounted(()=>{console.log('component Unmounted')})
      onUpdated(()=>{console.log('component Updated')})
    }

}
</script>

<style>

</style>