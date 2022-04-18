<template>
  <h1>Register</h1>
  <h3>Create An Account</h3>
  <p><input type="text" name="" v-model="email" placeholder="Email"></p>
   <p><input type="password" name="" v-model="password" placeholder="Password"></p>
   <p><button @click="register" type="submit" name="">Submit</button></p>
    <p><button @click="signWithGoogle" type="submit" name="">Sign With Google</button></p>
</template>

<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router";
  import { getAuth, createUserWithEmailAndPassword} from "firebase/auth"
  const email = ref("");
  const password = ref("");
  const router = useRouter();
  const register = () => {
       createUserWithEmailAndPassword(getAuth(), email.value, password.value)
       .then((data) => {
           console.log('Successfully registered', data);
           router.push('/feed')
       })
       .catch((err) => {
           console.log(err.code);
           alert(err.message);
       })
  };
  const signWithGoogle = () => {

  };
</script>

<style>

</style>