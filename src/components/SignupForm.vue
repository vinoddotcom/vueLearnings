<template>
  <form @submit.prevent="formSumit">
    <label>Email</label>
    <input type="text" name="" required v-model="email" />

    <label>Password</label>
    <input type="password" name="" required v-model="password" />
    <div v-if="passwordError">{{passwordError}}</div>

    <label>Password</label>
    <select v-model="role">
        <option value="developer">Wev Developer</option>
        <option value="designer">Wev Designer</option>
    </select>
    <!-- <div class="terms">
        
        <input id="term" type="checkbox" name="term" required v-model="termsConditions">
        <label for="term">Term & Conditions</label>
    </div>
    <div class="">
        <input  type="checkbox" value="Shaun" v-model="names">
        <label>Shaun</label>
    </div>
    <div class="">
        <input  type="checkbox" value="Hsdt" v-model="names">
        <label>Hsdt</label>
    </div>
    <div class="">
        <input  type="checkbox" value="Yoshi" v-model="names">
        <label>Yoshi</label>
    </div>
    <div class="">
        <input  type="checkbox" value="marios" v-model="names">
        <label>marios</label>
    </div> -->
 <label>Skills:</label>
 <input type="text" v-model="tempSkill" @keyup.alt="addSkill"><br>
  <button type="submit">Creat an account</button>
  <button @click="performEventBus">Event Bus</button>
  </form>
  <p>Email: {{email}} </p><p>Password: {{password}}</p><p>Role: {{role}}</p>
  <p>Term: {{termsConditions}}</p>
    <!-- <p>Names: {{names}}</p> -->
    <div v-for="item in skills" :key="item" class="pill" >
        <span @click="deleteSkill(item)">{{item}}</span> </div>
        <MultipleVModels v-model:password="userPassword" v-model:adress="userAddress"></MultipleVModels>
        <p>userpassword: {{userPassword}}, userAdress: {{userAddress}}</p>

      
</template>

<script>
import MultipleVModels from "./MultipleVModels.vue"

export default {
  components:{
     MultipleVModels
  },
  data() {
    return {
      email: "",
      password: "",
      role:"designer",
      termsConditions: "",
      names:[],
      tempSkill:[],
      skills:[],
       passwordError: "",
       userPassword:'',
       userAddress:"",
    };
  },
  methods: {
      addSkill(e){
        if(e.key ===',' && this.tempSkill){
            if(!this.skills.includes(this.tempSkill)){
            this.skills.push(this.tempSkill)
            }
            this.tempSkill=''
        }
        
      },
      deleteSkill(Skillkey){
  
      this.skills=this.skills.filter((item)=>{
          return(Skillkey!==item)
          });
      
      },
      formSumit(){
          //validation for
          this.passwordError=this.password.length>5 ? '': 'password mst 6 chars long'
          
      },
      
  }
};
</script>

<style>
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
 label{
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: o.6rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input, select{
  display: block;
  padding: 10px 6px;
  width: 100%;
  border: none;
  box-sizing: border-box;
  border-bottom: 1px solid #ddd;
  color: #555;
}
input[type="checkbox"]{
    display: inline-block;
    width: 16px;
    margin:0 10px 0 0;
    position: relative;
    top: 2px;
}
.pill{
    display: inline-block;
    margin: 20px 10px 0 0;
    padding: 06px 12px;
    background: #fff;
    border-radius: 20px;
    font-size:12px;
    letter-spacing: 1px;
    font-weight:bold;
    color: #555;
    cursor: pointer;
}
</style>