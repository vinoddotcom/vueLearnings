<template>
  <div  v-if="error" class="post">{{error}} hello</div>
  <div v-else > error aar null</div>
  <div v-if="post">
    <div>details</div>
    <h1>{{post.title}}</h1>
    <p>{{post.body}}</p>
   </div>
    <div v-else > post aar null</div>
</template>

<script>
import getPost from '../composable/getPost.js'

export default {
props:['id'],
setup(props){
  
const  { post, error, load } = getPost(props.id);
console.log(getPost(props.id));
load()

 console.log('xcvbnm' ,post);

return { post, error}
}
}
</script>

<style>
    
</style>