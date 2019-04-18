<template>
  <div id="app">
   <navside></navside>

    <!-- <div id="container">
      <div class="pages" >
      <b-dropdown id="ddown-sm" size="sm" text="Per-Page" class="m-2">
    <b-dropdown-item-button @click="pagescount=5"> 5 </b-dropdown-item-button>
    <b-dropdown-item-button @click="pagescount=10"> 10 </b-dropdown-item-button>
    <b-dropdown-item-button @click="pagescount=15"> 15 </b-dropdown-item-button>
    <b-dropdown-item-button @click="pagescount=20"> 20 </b-dropdown-item-button>
    <b-dropdown-item-button @click="pagescount=50"> 50 </b-dropdown-item-button>
  </b-dropdown>
      </div>
    </div> -->

  </div>
</template>

<script>
import Navside from './components/Navside.vue'

import axios from 'axios';

export default {
  name: 'app',
  components: {
    Navside
  },

  created(){
    axios.get(`https://randomuser.me/api/?result=10`)
    .then((response) => {
      console.log(response);
      this.items = response.data.results[0]
    })
  },

     data() {
    return {
      items: [],
     
  }
},
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
