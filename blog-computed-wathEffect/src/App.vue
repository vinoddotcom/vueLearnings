<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <input type="text" v-model="serch">
    <p>serch term : {{serch}}</p>
   <div v-for="name in matchingNames" :key="name">
     {{name}}
   </div>
   <button @click="stopwathching" >Stop Wathching</button>
  </nav>
  <router-view/>

  
</template>
  <script>
  import {  ref, computed  } from "@vue/reactivity";
import { watch, watchEffect } from '@vue/runtime-core';
  export default {
    setup(){ 
      const serch = ref('')
     const names = ref(["cdfgv", "dg", "fgfb", "ffb"])

     const stopWatch = watch(serch, ()=>{
       console.log('watch')
     })

    const stopWatchEffect = watchEffect(()=>{
       console.log('first', serch.value)
     })

     const stopwathching = () =>{
       stopWatch();
       stopWatchEffect();

     }

    const matchingNames = computed(()=>{
      if(serch.value.length <= 0){
        return
      }
       return names.value.filter((name)=> name.includes(serch.value))
    })


     return { names, serch, matchingNames, stopwathching }
      }
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
