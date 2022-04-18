<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
  <h1>hi I am {{store.name}} and I am {{store.isAdmin ? 'admin': "normal user"}}</h1>
  <p>Double count is {{ store.doubleCount }}</p>
  <p>Double Plus One: {{store.doublePlusOne}}</p>
  <button type="button" @click="store.$patch({counter: store.counter+1})">Count :  {{store.counter}}</button>
  <button type="button" @click="store.increment()" >from store Count :  {{store.counterss}}</button>
  <button type="button" @click="store.$reset()" >REset:  {{store.counter}}</button>
    <div class="hello">
    <h1>Bank Of Pinia</h1>
    <h3>Balance : {{bankStore.runningBalance}}</h3>
    <h3>Balance : {{bankStore.pendingBalance}}</h3>
    <h3>Processed:</h3>
    <ul>
      <li v-for="item in bankStore.processedTransaction" :key="item.id"> ${{item.amount}}</li>

    </ul>
    <h3>Pending:</h3>
    <ul>
      <li v-for="item in bankStore.pendingTransaction" :key="item.id"> ${{item.amount}}</li>

    </ul>
    <button @click="bankStore.charge(5)">Buy Coffee $5</button>
  </div>
</template> 

<!-- <script>
 import { useStore } from '@/store/cart'

export default {
  setup() {
    const store = useStore()

    return {
      // you can return the whole store instance to use it in the template
      store,
    }
  },
}
</script> -->
<script setup lang="ts">
 import { useBankStore } from '@/store/bankAccountStore'
 import { useStore } from '@/store/cart'
  const bankStore = useBankStore();
  const store = useStore()

  bankStore.$onAction(({name, store, after}) => {
     after(result => {
       if(result && name === 'charge') {
         store.processeTransaction(result);
       }
     })
  })
  

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
