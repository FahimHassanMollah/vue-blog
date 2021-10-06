<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
   <h1>Home</h1>
  </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    
  },
  setup(){
    const posts = ref([]);
    const error = ref(null);

    const load = async () => {
      try {
        const response = await axios.get('http://localhost:3000/posts');
        console.log(response)
      } catch (error) {
        console.log(error);
      }
    }

    return {posts,error,load};
    
  }
}
</script>
