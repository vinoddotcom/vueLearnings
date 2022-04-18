<template>
  <div class="home">
  <h1>home</h1>
  <div v-if="error">{{error}}</div>
  <div v-else>
      <div v-if="posts.length">
  <PostList  :posts="posts" ></PostList>
  </div>
  <div v-else>Loading...</div>
  </div>
  </div>
</template>

<script>
import PostList from "../components/PostList.vue"
import getPosts from  '../composable/getPosts.js'

export default {
  name : "HomeView",
  components: { PostList },
  setup(){
    const {posts, error, load } = getPosts ()
    load( )
    return {error ,posts}
  }
}
</script>
