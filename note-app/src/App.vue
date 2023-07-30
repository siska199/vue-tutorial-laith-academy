<script setup>
  import {ref} from "vue"
  const showModal = ref(false)
  const newNote = ref("")
  const notes = ref([])
  const errorMessage = ref("")
  
  const toogleModal= ()=>{
    showModal.value = !showModal.value
  }

  const addNote = () =>{
    if(newNote?.value?.length<10){
      errorMessage.value="Text Note should be equal or more than 10 characters"
    }else{
      notes.value = [
        ...notes?.value,
        {
          id : Math.floor(Math.random()*1000000),
          text : newNote?.value,
          date : new Date(),
          backgroundColor : getRandomColor()
        }
      ]
      toogleModal()
      newNote.value=''
      errorMessage.value=''
    }
  }

  const getRandomColor = () =>{
    const color = "hsl(" + Math.random() * 360 + ", 100%, 75%)";
    return color;
  }

</script>

<template>
  <main>
    
    <div v-show="showModal" class="overlay">
      <div class="modal">
        <textarea v-model.trim="newNote" name="note" id="note" cols="30" rows="10"></textarea>
        <p v-if="errorMessage">{{errorMessage}}</p>
        <button @click="addNote">Add Note</button>
        <button class="close" @click="toogleModal">Close</button>
      </div>
    </div>
    
    <div class="container">
      
      <header>
        <h1>Notes</h1>
        <button @click="toogleModal">+</button>
      </header>

      <div class="card-container">
        <div class="card" v-for="note in notes" :style="{backgroundColor:note.backgroundColor}" :key="note.id">
          <p class="main-text">{{ note.text }}</p>
          <p class="date">{{ note.date.toLocaleDateString("en-US") }}</p>
        </div>
      </div>
    
    </div>
  </main>
</template>

<style scoped>
  main{
    height : 100vh;
    width : 100vw;
  }
  .container {
    max-width: 1000px;
    padding: 10px;
    margin: 0 auto;
  }

  header{
    display : flex;
    justify-content: space-between;
    align-items: center;
  }
  h1{
    font-weight: bold;
    margin-bottom: 25px;
    font-size: 50px;
  }
  header button{
    border:none;
    padding: 10px;
    width : 50px;
    height: 50px;
    cursor: pointer;
    background-color:rgb(21,20,20);
    color : white;
    font-size: 20px;
    border-radius: 50%;
  }
  .card{
    width : 255px;
    height: 255px;
    background-color: rgb(237,182,44);
    padding: 10px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 20px;
    margin-left: 20px;
  }
  .card{
    font-size: 12.5px;
    font-weight: bold;
  }
  .card-container{
    display: flex;
    flex-wrap: wrap;

  }

  .overlay{
    position : absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.77);
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .modal{
    width : 750px;
    background-color: white;
    border-radius: 10px;
    padding: 30px;
    position: relative;
    display: flex;
    flex-direction: column;
  }
  .modal button{
    padding: 10px 20px;
    font-size: 20px;
    width : 100%;
    background-color: blueviolet;
    border: none;
    color:none;
    cursor: pointer;
    margin-top:15px;
    color:white;
  }
  .modal .close{
    background-color: rgb(193,15,15);
  }
</style>
