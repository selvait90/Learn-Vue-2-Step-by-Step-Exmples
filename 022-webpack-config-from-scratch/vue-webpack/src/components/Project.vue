<template>
  <div class="hello">
    <form @keydown="form.errors.clear($event.target.name)">
      <div class="form-group">
        <label for="projectName">Project Name</label>
        <input type="text" class="form-control" name="name" id="projectName" placeholder="Project Name" v-model="form.name">
        <!-- input type="text" class="form-control" id="projectName" placeholder="Project Name" v-model="name" @keydown="errors.clear('name')"-->        
        <!--div class="error-info" v-if="errors.hasOwnProperty('name')"> Description - {{errors.name.join(',')}}</div-->
        <div class="error-info" v-if="form.errors.has('name')"> {{form.errors.get('name')}}</div>
      </div>
      <div class="form-group">
        <label for="projectDescription">Project Description</label>
        <input type="text" class="form-control" name="description" id="projectDescription" placeholder="Project Description" v-model="form.description">
        <!--div class="error-info" v-if="errors.hasOwnProperty('description')"> Description - {{errors.description.join(',')}}</div-->
        <div class="error-info" v-if="form.errors.has('description')"> {{form.errors.get('description')}}</div>
      </div>
      <button @click.prevent="createProject" class="btn btn-primary" :disabled="form.errors.any()">Create</button>
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
    this.errors = data
  }

  clear(field) {
    if(this.errors[field]) {
      delete this.errors[field]
    }
  }

}

class Form {
  constructor(data) {
    this.originalData = data
 
    for (let field in data) {
      this[field] = data[field];
    }

    this.errors = new Errors()
  }

  loadData() {
    for(let field in this.originalData) {
      if(this)
      this.originalData[field] = this[field]
    }
    return this.originalData
  }

  reset() {
    for(let field in this.originalData) {
      this[field] = ''
    }    
  }

  getData() {
    let data = Object.assign({}, this)
    delete data.originalData
    delete data.errors
    return data
  }

  post(url) {
    return this.submit('post', url)
  }

  submit(requestType, url) {
    console.log("data : " + JSON.stringify(this.loadData()))
    return new Promise((resolve, reject) => {
      axios[requestType](url, this.loadData())
        .then(response => {
          this.onSuccess(response.data)
          resolve(response.data)
        })
        .catch(error => {
          this.onFail(error.response.data)
          reject(error.response.data)
        })

    }) 
  }

  onSuccess(response) {
    console.log("create success" + response.data)
    this.reset()
  }

  onFail(errors) {
    // // {"name":["can't be blank"],"description":["can't be blank"]}
    console.log("create failure : " + JSON.stringify(errors))
    this.errors.record(errors)
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
      form: new Form({
        name: '',
        description: '',
      })      
    }
  },
  methods: {

    createProject() {
      var self = this
      this.form.post('http://localhost:3000/projects')
      .then(data => {
        console.log("resolve : " + data)
        self.loadProjects()
      })
      .catch(errors => console.log("reject" + errors))
      
    },

    loadProjects() {
      var self = this
      axios.get('http://localhost:3000/projects')
      .then(function(response) {
        self.projects = response.data
        console.log(response.data)
      })
    }

  },


  mounted() {
    this.loadProjects()
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