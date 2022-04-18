<template>
  <div class="hello">
    
    <button @click="increMent()" type="button" class="btn btn">
      Count {{ count }}
    </button>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  computed:{
      count(){
        return this.$store.state.count
      }
  },
  methods: {
     increMent(){
       this.$store.dispatch({
          type: 'increments',
          value: -300
       })
     }
  }
  
    
    
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
