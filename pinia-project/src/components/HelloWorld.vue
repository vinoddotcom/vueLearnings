<template>
  <div class="hello">
    <h1>Bank Of Pinia</h1>
    <h3>{{bankStore.runningBalance}}</h3>
  </div>
</template>

<script setup lang="ts">
 import { useBankStore } from '@/store/bankAccountStore'
 const bankStore = useBankStore();

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
