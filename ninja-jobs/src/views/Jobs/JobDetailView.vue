<template>
<div v-if="job" class="">
    <h1>Jobs Detais Page </h1>
  <p>The Job id is {{ id }} </p>
  <p>{{job.details}}</p>
  <p>{{userName}} hi</p>
</div>
<div v-else class="">
       <p>Loading.........</p>
   </div>

  
</template>

<script>
export default {
    props: ['id'],
    data(){
        return {
             job: null
        }
    },
    inject: ['userName'],

    mounted(){
        
        fetch('http://localhost:3000/jobs/'+this.id)
          .then((res)=> res.json())
          .then(data => this.job=data)
          .catch(err => console.log(err.message))
    }


}
</script>

<style>

</style>