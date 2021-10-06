<template>
  <div id="nav">
    <Nav/>
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
  </div>
  <router-view/>
</template>
<script>
import Nav from './components/Nav.vue'

export default {
  name:"App",
  components:{
    Nav
  }
}
</script>
<style>

</style>
