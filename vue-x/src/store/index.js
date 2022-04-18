import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 5,
    todos: [
      {id:1, text: 'wakeup early', done: true},
     {id:2, text: 'd breakfast', done: true}, 
     {id:3, text: 'go to school', done: false},
      {id:4, text: 'sleep early', done: false}
    ]
    
  },
  getters: {
    getTodoById: (state) => (id)=>{
      return state.todos.find(todo=>todo.id===id);
    },
    doneTodos(state){
      return state.todos.filter((todo)=> todo.done)
    },
    doneTodoList(state, getters){
      return getters.doneTodos.length;
    }
  },
  mutations: {
    increMent  (state, payload)     {
       state.count += payload.value;
  }
  },
  actions: {
     increments (context, payload) {
       setTimeout(() =>{
        context.commit('increMent', payload);
       }, 2000)
     },
     actionsA(context) {
        return new Promise((resolve, reject) =>{
          setTimeout(() =>{
            context.commit('increMent', {value: 100});
            resolve('leela web dev');
            reject('error Occurd');
          }, 2000);
        })
     },
     actionsB(context) {
       context.dispatch('actionsA').then((response) =>{
         console.log(" Calling success from actionB")
         console.log(response)
       })
     }

  },
  modules: {

  }

})
