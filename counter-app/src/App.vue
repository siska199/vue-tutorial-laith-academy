<!-- Composition API -->
<script setup>
  import {ref} from "vue"

  const count = ref(0)
  const changeCount = (type)=>{
    if(type=="add"){
      count.value +=1
    }
    else if(type=="substract"){
      count.value -=1
    }
  }
</script>

<!-- Options API -->
<!-- 
<script>
  export default({
    data(){
      return {
        count : 0
      }
    },
    methods:{
      changeCount(type){
        if(type=="add"){
          this.count +=1
        }
        else if(type=="substract"){
          this.count -=1
        }
      }
    }

  })
</script> -->

<template>
  <main>
    <div>
      <h4>
        The Current COunt Is...
      </h4>
      <h1>{{count}}</h1>
      <button @click="changeCount('substract')">-</button>
      <button @click="changeCount('add')">+</button>
    </div>
  </main>

</template>

<style scoped>
  main {
    background-color: aliceblue;
    height: 100vh;
    width : 100vw;
    display: flex;
    align-items: cente;
    justify-content: center;
  }
  div{
    text-align: center;
  }
</style>