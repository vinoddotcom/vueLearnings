<template>
  <div class="">
      <div class="">
          {{count}} <button @click="increMent({ value: 100})"> Counter components Buttton</button>
      </div>
  </div>
</template>

<script>

export default {
    computed:{
      count(){
        return this.$store.state.count
      }
    },
    // methods: {
    //     ...mapActions({
    //     increMent: 'actionsB'
    //     }),
     increMent(){
       this.$store.dispatch('actionsB', { value: 100}).reject(){
         console.log("error")
       }
     }
  }


</script>

<style>

</style>