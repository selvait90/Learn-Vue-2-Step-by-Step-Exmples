<template>
  <div id="app">
    <blog></blog>
  </div>
</template>

<script>
import Blog from './components/Blog.vue'
import axios from 'axios'

export default {
  name: 'app',
  components: {
    Blog
  }
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
