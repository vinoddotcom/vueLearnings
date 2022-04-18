<template>
<h1>Ninza Reaction Timer</h1>
<button @click="start" :disabled="isPlaying">Play</button>
<BlockNi v-if="isPlaying"  :delay="delay" @end="endGame"> </BlockNi>
<div v-if="showResults">
  <ResuLt :score="score"></ResuLt>
</div>
</template>

<script>
import BlockNi from './components/BlockNi.vue'
import ResuLt from './components/ResuLt.vue'

export default {
  name: 'App',
  components: { BlockNi, ResuLt },
  data() {
     return{
       isPlaying :false,
       display: null,
       delay: null,
       score: null,
       showResults:false
     }
  },
  methods: {
    start(){
      this.delay = 2000 + Math.random()*5000;
      this.isPlaying = true;
      this.showResults=false
    },
    endGame(reactionTime){
      this.score = reactionTime;
      this.isPlaying = false;
      this.showResults=true

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
  color: #444;
  margin-top: 60px;
}
</style>
