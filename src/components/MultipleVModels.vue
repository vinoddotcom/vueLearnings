<template>
password
 <input type="password" value="password"  @input="updatePassword">
 answer
 <input type="text" value="adress" @input="updateAdress" >

</template>

<script>
export default {
props:{
    password: String,
    adress: String,
},
setup(props, context){

    function updatePassword (){
        context.emit("update:password", event.target.value)
    }
    function updateAdress(){
          context.emit("update:adress", event.target.value)
    }

    return {updatePassword, updateAdress }
}
}
</script>

<style>

</style>