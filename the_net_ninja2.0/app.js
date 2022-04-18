const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      title: "The Final Empire",
      author: "Brandon Sanderso",
      age: 45,
      x:0,
      y:0
    };

  },
  methods:{
      changeTitle(title){
          //console.log("yoy clicked Me")
          //this.title='hello world!';
          this.title=title;
      },
      
        showToogleBooks(e){
            this.showBooks = !this.showBooks;
        }, 

        handelMOuseEnterEvent(e, data){
          console.log(e, e.type);
          if(data){
            console.log(data)
          }
        },

        handleMouseMoveEvent(e){
              this.x=e.offsetX
              this.y=e.offsetY
        }
      
    
  }
});
app.mount("#app");
console.log(app);
