import { ref } from 'vue'
const getPost=(id)=>{
    const post = ref(null)
    const error = ref(null)
   
     const load = async () => {
       try{
            let data = await fetch('http://localhost:3000/posts/'+id)
            console.log("hello")
          
            if(!data.ok){
               throw  Error('no data available')
            }
            post.value = await data.json()
       }
       catch(err) {
          error.value = err.message;
          console.log(error.value)
       }
       console.log(post)
     }
    return {post, error, load }
}

export default getPost;