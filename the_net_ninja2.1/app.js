const app = Vue.createApp({
  data() {
    return {
      url: "http://helloworld.com/",
      showBooks: true,
      books: [
        {
          id: "1",
          title: "name of the wind",
          author: "himsesh",
          imgName: "./assets/justin-little-hxUnNtWIjso-unsplash.jpg",
          isFav: true,
        },
        {
          id: "2",
          title: "The Way Kings",
          author: "himsesh",
          imgName: "./assets/karolina-bobek-buUkxvClBEw-unsplash.jpg",
          isFav: false,
        },
        {
          id: "3",
          title: "The Final empire",
          author: "sandy",
          imgName: "./assets/marcus-dall-col-5gJwzBZZzRk-unsplash.jpg",
          isFav: true,
        },
      ],
    };
  },
  methods: {
    changeTitle(title) {
      //console.log("yoy clicked Me")
      //this.title='hello world!';
      this.title = title;
    },
    handelFav(e, data) {
      console.log(this.books[0].id);
      if (this.books) {
        for (let i = 0; i < this.books.length; i++) {
          if (this.books[i].id === data) {
            this.books[i].isFav = !this.books[i].isFav;
            return;
          }
        }
      }
    },
    
  },
  computed: {
    filteredBook(){
      return(
      this.books.filter((book)=>book.isFav)
      )
    }
  }
});
app.mount("#app");
console.log(app);
