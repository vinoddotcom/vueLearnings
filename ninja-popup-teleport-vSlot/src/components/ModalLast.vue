<template>
  <div class="backdrop" @click.self="closeMOdal">
    <div class="modal" :class="{ sale: theme === 'sale' }">
      <slot>Default Content</slot>
      <div class="action">
        <slot name="links"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["header", "text", "data", "theme"],
  methods: {
    closeMOdal() {
      this.$emit("close");
    },
  },
};
</script>

<style>
.modal {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background: white;
  border-radius: 10px;
}
.backdrop {
  top: 0;
  position: fixed;
  background: rgb(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
.modal.sale {
  background: crimson;
  color: white;
}
.modal.sale h1 {
  color: aliceblue;
}
.modal .action{
    text-align: center;
    margin: 30px 0 10px 0;
}
.modal .action a{
    color: #333;
    background: #eee;
    padding: 8px;
    border: 1px solid #eee;
    border-radius: 4px;
    text-decoration: none;
    margin: 10px;


}
</style>