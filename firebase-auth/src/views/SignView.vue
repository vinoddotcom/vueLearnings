<template>
  <h1>Register</h1>
  <h3>Create An Account</h3>
  <p><input type="text" name="" v-model="email" placeholder="Email" /></p>
  <p>
    <input type="password" name="" v-model="password" placeholder="Password" />
  </p>
  <p v-if="errMsg">{{ errMsg }}</p>
  <p><button @click="register" type="submit" name="">Submit</button></p>
  <p>
    <button @click="signWithGoogle" type="submit" name="">
      Sign With Google
    </button>
  </p>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
const email = ref("");
const password = ref("");
const errMsg = ref("");
const router = useRouter();

const register = () => {
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log("Successfully signed", data);
      router.push("/feed");
    })
    .catch((err) => {
      console.log(err.code);
      switch (err.code) {
        case "auth/user-not-found":
          errMsg.value = "No  Account with that email was found";
          break;
        case "auth/invalid-email":
          errMsg.value = "Invaid Email is invalid";
          break;
        case "auth/wrong-password":
          errMsg.value = "Incorrect Password";
          break;
        default:
          errMsg.value = "Email or password is incorrect";
      }
    });
};
const signWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      console.log(result.user);
      router.push("/feed");
    })
    .catch((err) => {
      console.log(err.code);
    });
};
</script>

<style>
</style>