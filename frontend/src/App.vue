<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
   name: 'App',
  components: {
    Navbar,
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

#app {
font-family: 'Montserrat', sans-serif;
background-color: black;
}



</style>
