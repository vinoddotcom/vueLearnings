const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      title: "The Final Empire",
      author: "Brandon Sanderso",
      age: 45
    };

  },
  methods:{
      changeTitle(title){
          //console.log("yoy clicked Me")
          //this.title='hello world!';
          this.title=title;
      },
      
        showToogleBooks(){
            this.showBooks = !this.showBooks;
        }
    
  }
});
app.mount("#app");
console.log(app);
