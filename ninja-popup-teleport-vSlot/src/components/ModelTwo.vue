<template>
    <div class="popup" @click.self="closePopup">
        <div class="popupInner">
            <p>hello world!</p>
        </div>
    </div>
</template>
<script>
export default{
    props:[],
    methods:{
      closePopup(){
          this.$emit('close')
      }
    }
}

</script>

<style scoped>
.popup{
  top: 0;
  position: fixed;
  background: rgb(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;

}
.popup .popupInner{
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background: white;
  border-radius: 10px;
}
</style>