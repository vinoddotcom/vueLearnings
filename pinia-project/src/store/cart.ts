import { defineStore } from "pinia";

export const useStore = defineStore("storeId", {
  
  state: () => {
    return {
      
      counter: 0,
      name: "Eduardo",
      isAdmin: true,
      users:[
        {id: 1, name:'alibbaba', isAdmin: true},
        {id: 2, name:'amazon', isAdmin: false},
        {id: 3, name:'vvgdthj', isAdmin: false}
      ],
    };
  },
  getters: {
    doubleCount: (state) => state.counter * 2,
   
    doublePlusOne(): number {
      
      return this.doubleCount + 1;
    },
   
  },
  actions: {
    increment() {
     this.counter++; 
    }
  }
});
