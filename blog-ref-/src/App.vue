<template>
  <nav>
    <router-link to="/">Home</router-link> |
      <p     class="ninja">hello my name is {{name}} and age is {{age}}</p>
      <button @click="handeleclick"> Click me</button>
       <button @click="age++">Add Age</button>
      <input type="text" v-model="name" name="" id="">
  </nav>
  <router-view/>
</template>
<script>
import { ref, } from 'vue'
//import { defineComponent } from '@vue/composition-api'

export default {
  setup() {

    let name = ref('mario');
   //const p = ref(null)
    let age  = ref(20);
    const handeleclick =  () => {
      name.value = 'lugi'; 
    //   console.log(p.value.textContent);
    //   p.value.classList.add('mario')
    //   p.value.textContent = 'ninja text'
       } 
    return { name, age, handeleclick}
  },
//   created() {
//      console.log('created');
//   },
//   mounted(){
//      console.log('mounted');
//   },
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
