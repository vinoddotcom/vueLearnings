import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdcXMTmXQVQRkMtzo8Nsn6urjB9OSHRBc",
  authDomain: "vue-learn-auth.firebaseapp.com",
  projectId: "vue-learn-auth",
  storageBucket: "vue-learn-auth.appspot.com",
  messagingSenderId: "216402069539",
  appId: "1:216402069539:web:4d09411c63f7c4ffdf8996"
};

initializeApp(firebaseConfig);

createApp(App).use(store).use(router).mount('#app')
