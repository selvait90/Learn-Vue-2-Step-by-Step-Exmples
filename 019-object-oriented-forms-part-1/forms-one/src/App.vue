<template>
  <div id="app">
    <Project></Project>
  </div>
</template>

<script>
import Vue from 'vue'  
import Project from './components/Project.vue'


export default {
  name: 'app',
  components: {
    Project
  }
}
</script>

<style>
#app {
  color: #2c3e50;
  margin: 100px;
}
</style>
