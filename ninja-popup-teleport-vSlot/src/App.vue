<template>
  <h2>hello world!{{ title }}</h2>
  <input type="text" ref="name" />
  <button @click.alt="handleClick">Click Me with alt</button>
  <button @click="togelPopupTwo">Click Me</button>
  <teleport to=".modalss" v-if="showModel">
    <ModalLast
      :data="data"
      :header="header"
      :text="text"
      theme="sale"
      @close="handleClick"
    >
    <template v-slot:links>
      <a href="#">Sign Up</a>
      <a href="#"> More Info</a>
    </template>
      <h1>{{ header }}</h1>
      <h4>{{ text }}</h4>
      <h6>{{ data[0] }} {{ data[1] }}</h6>
      <p>Model Content</p>
    </ModalLast>
   
  </teleport>
  <teleport to=".modalss" v-if="showModelTwo">
       <ModelTwo @close="togelPopupTwo"></ModelTwo>
  </teleport>
  
</template>

<script>
import ModalLast from "./components/ModalLast.vue";
import ModelTwo from './components/ModelTwo.vue';

export default {
  name: "App",
  components: { ModalLast, ModelTwo},
  data() {
    return {
      title: "My First Vue App:",
      data: ["hello", "world!"],
      header: "sign up for the Giveaway",
      text: "lorm ipsum",
      showModel: false,
      showModelTwo:false
    };
  },
  methods: {
    handleClick() {
      // console.log(this.$refs.name.value)
      // this.$refs.name.classList.add('active')
      // this.$refs.name.focus();
      this.showModel = !this.showModel;
    },
    togelPopupTwo(){
      this.showModelTwo = !this.showModelTwo;
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h2 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
