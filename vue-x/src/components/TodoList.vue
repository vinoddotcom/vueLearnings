<template>
  <div style="text-align: left">
    <h3>To do List ( Done: {{ getDoneListCount }})</h3>
    <ul>
      <li v-for="todo in todolist" :key="todo.id"> <a @click="onTodoSelected(todo.id)" href="#">
        
  {{ todo.text }}     Status:  {{ todo.done ? "Done" : "Not Done" }}
       </a></li>
    </ul>
    <div class="">
      <h3>Done To do List ( Done: {{ getDoneListCount }})</h3>
      <ul>
        <li v-for="todo in getDoneList" :key="todo.id">
         
            
             {{ todo.text }}     Status:  {{ todo.done ? "Done" : "Not Done" }}
         
        </li>
      </ul>
    </div>
    <div v-if="selectedId" class="">
        <h3>Selected todo </h3>
        <div class="">{{selectedTodoList.id}}</div>
        <div class="">{{selectedTodoList.text}}</div>
        <div class="">{{selectedTodoList.done}}</div>
    </div>
  </div>
</template>

<script>
import{mapState, mapGetters, mapActions} from 'vuex'
export default {
  data() {
    return {
        selectedId: null
    };
  },
  computed: {
    ...mapState({
        todolist: (state)=> state.todos
    }),
    ...mapGetters({
        getDoneListCount : 'doneTodoList',
        getDoneList: 'doneTodos',
        selectedTodoList: 'getTodoById'
    }),

    // todolist() {
    //   return this.$store.state.todos;
    // },
    // getDoneListCount() {
    //   return this.$store.getters.doneTodoList;
    // },
    // getDoneList() {
    //   return this.$store.getters.doneTodos;
    // },
    selectedTodoList() {
         return this.$store.getters.getTodoById(this.selectedId);
    }
  },
  methods: {
      ...mapActions({
     
      }),
    onTodoSelected(id) {
        this.selectedId=id;
    },
  },
};
</script>

<style></style>
e
