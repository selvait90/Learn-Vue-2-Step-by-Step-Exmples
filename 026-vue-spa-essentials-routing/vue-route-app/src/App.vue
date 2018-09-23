<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="container-fluid col-md-">
          <nav class="navbar navbar-expand-lg navbar-light bg-light" style="background-color: #e3f2fd!important;">
            <div class="collapse navbar-collapse" id="navbarText">
              <ul class="navbar-nav mr-auto nav-pills">
                <li class="nav-item">
                  <router-link to="/" class="nav-link" exact>
                    Home
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/about" class="nav-link">
                    About
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/contact" class="nav-link">
                    Contact
                  </router-link>
                </li>
              </ul>
              <span class="navbar-text">
                SPA and Backend Sample Application
              </span>
            </div>
          </nav>
        </div>
      </div>
      <div class="row">
        <div class="container-fluid">
          <router-view></router-view>
        </div>        
      </div>
    </div>
    

  </div>
</template>

<script>
import Home from './components/Home.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import router from './routes';

export default {
  name: 'app',
  components: {
    Home, About, Contact
  },
  router: router
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
