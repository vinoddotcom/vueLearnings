<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <!-- <router-link to="/about">About</router-link> -->
       <router-link :to="{ name:'about' }">About</router-link> | 
      <router-link :to="{ name:'Jobs' }">Jobs</router-link>
  </nav>
  <button @click="redirect" class="button-30">Redirect</button>
    <button @click="back"  class="button-30">G Back</button>
      <button @click="forword" class="button-30">Go Forword</button>
      <h1>{{userName}} d</h1>

  <!-- <router-view v-slot="{ Component } ">
      <transition name="fade" mode="out-in">
        <Component :is="Component"></Component>
      </transition>
  </router-view> -->
  <router-view v-slot="{ Component, route }">
  <transition name="fade" mode="out-in">
    <div :key="route.name">  
      <component :is="Component"></component>
    </div>
  </transition>
</router-view>
  <!-- <router-view></router-view> -->
</template> 

<script>
export default {
  methods: {
    redirect(){
     this.$router.push({name: "home"})

    },
    back(){
      //console.log("hello world!")
     this.$router.go(-1) 
    },
    forword(){
        this.$router.go(1)
    },
    
     

  },
  data(){
    return {
     userName :'vishwas'
    }
  },

  provide(){
    return {
      userName: this.userName
    }
      
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




/* CSS */
.button-30 {
  align-items: center;
  appearance: none;
  background-color: #FCFCFD;
  border-radius: 4px;
  border-width: 0;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,rgba(45, 35, 66, 0.3) 0 7px 13px -3px,#D6D6E7 0 -3px 0 inset;
  box-sizing: border-box;
  color: #36395A;
  cursor: pointer;
  display: inline-flex;
  font-family: "JetBrains Mono",monospace;
  height: 48px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow .15s,transform .15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow,transform;
  font-size: 18px;
  margin-left: 16px;
}

.button-30:focus {
  box-shadow: #D6D6E7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
}

.button-30:hover {
  box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
  transform: translateY(-2px);
}

.button-30:active {
  box-shadow: #D6D6E7 0 3px 7px inset;
  transform: translateY(2px);
}

.fade-enter-from, .fade-leave-from {
opacity: 0;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease-out;
}
</style>
