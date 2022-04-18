<template>
<div class="block" v-if="showBlock" @click="stopTimer"> Click Me</div>
</template>

<script>
export default {
props:['delay'],
data(){
    return {
        showBlock:false,
        timer:null,
        rection:0,
        
    }
},
mounted(){
    console.log('component mounted')
    setTimeout(() =>{
        this.showBlock=true;
        console.log(this.delay)
        this.startTimer();
    }, this.delay)
},
// updated(){
//     console.log('Updated Component')
// },the net ninja
// unmounted(){
//     console.log('unmounted Component')
// }

methods:{
    startTimer(){
        this.timer= setInterval(() =>{
            this.rection+=10;
        }, 10)
    }, 
    stopTimer(){
        clearInterval(this.timer)
        this.$emit('end', this.rection)
    }

}

}
</script>

<style>
.block{
    width: 400px;
    border-radius: 20px;
    background: #0faf87;
    color: white;
    text-align: center;
    padding: 100px 0;
    margin: 40px auto;
}

</style>