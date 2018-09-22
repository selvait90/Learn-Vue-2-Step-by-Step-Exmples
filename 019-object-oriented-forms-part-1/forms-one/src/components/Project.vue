<template>
  <div class="hello">
    <form @keydown="errors.clear($event.target.name)">
      <div class="form-group">
        <label for="projectName">Project Name</label>
        <input type="text" class="form-control" name="name" id="projectName" placeholder="Project Name" v-model="name">
        <!-- input type="text" class="form-control" id="projectName" placeholder="Project Name" v-model="name" @keydown="errors.clear('name')"-->        
        <!--div class="error-info" v-if="errors.hasOwnProperty('name')"> Description - {{errors.name.join(',')}}</div-->
        <div class="error-info" v-if="errors.has('name')"> {{errors.get('name')}}</div>
      </div>
      <div class="form-group">
        <label for="projectDescription">Project Description</label>
        <input type="text" class="form-control" name="description" id="projectDescription" placeholder="Project Description" v-model="description">
        <!--div class="error-info" v-if="errors.hasOwnProperty('description')"> Description - {{errors.description.join(',')}}</div-->
        <div class="error-info" v-if="errors.has('description')"> {{errors.get('description')}}</div>
      </div>
      <button @click.prevent="createProject" class="btn btn-primary" :disabled="errors.any()">Create</button>
    </form>

    <div class="projects-list">
      <ul>
        <li v-for="project in projects" :key="project.id"> 
          <span v-if="project.name">{{project.name}}</span>
          <span v-if="project.description"> : {{project.description}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
window.axios = require('axios');

class Errors {
  constructor() {
    this.errors = {}
  }

  get(field) {
    console.log("get : " + field)
    if(this.errors[field]) {
      return field + ' ' + this.errors[field].join(',')
    }
  }

  has(field) {
    return this.errors.hasOwnProperty(field)
  }

  any() {
    return Object.keys(this.errors).length > 0
  }

  record(data) {
    console.log("record : " + data)
    this.errors = data
  }

  clear(field) {
    console.log("clear : " + field)
    if(this.errors[field]) {
      delete this.errors[field]
    }
  }

}

export default {
  name: 'Project',
  props: {
    msg: String
  },
  data() {
    // $vm0.$children[0].$data
    return {
      projects: [],
      name: '',
      description: '',
      errors: new Errors()
    }
  },
  methods: {
    createProject() {
      var self = this
      console.log("Form Data" + this.name)
      axios.post('http://localhost:3000/projects', {'name': this.name, 'description': this.description})
      .then(function(response) {
        console.log("create success" + response.data)
      })
      .catch(function(error) {
        // {"name":["can't be blank"],"description":["can't be blank"]}        
        console.log("create failure : " + JSON.stringify(error.response.data))
        self.errors.record(error.response.data)
      })
    }
  },
  mounted() {
    var self = this
    axios.get('http://localhost:3000/projects')
    .then(function(response) {
      self.projects = response.data
      console.log(response.data)
    })
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.projects-list {
  margin-top: 50px;
}
.error-info {
  color: red;
}
</style>
