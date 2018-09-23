<template>
  <div id="app">
    <p>


      <ul class="nav nav-pills">
        <li class="nav-item">
          <router-link to="/">
            <a class="nav-link">Home</a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about">
            <a class="nav-link">About</a>
          </router-link>
        </li>
      </ul>
    </p>
    <router-view></router-view>

  </div>
</template>

<script>
import Home from './components/Home.vue'
import About from './components/About.vue'
import router from './routes';

export default {
  name: 'app',
  components: {
    Home, About
  },
  router: router
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
