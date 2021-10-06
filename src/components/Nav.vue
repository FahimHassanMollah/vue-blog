<template>
  <nav class="navbar navbar-light bg-light">
  <div class="container">
    <router-link :to="{ name:'Home' }" class="navbar-brand">Navbar</router-link>
    <ul class="navbar-nav">
        <li class="nav-item">
            <router-link class="nav-link" :to="{name:'Create' }">Create</router-link>
        </li>
    </ul>
    
    
  </div>
</nav>
</template>

<script>
export default {
    name:"Nav"
}
</script>

<style>

</style>