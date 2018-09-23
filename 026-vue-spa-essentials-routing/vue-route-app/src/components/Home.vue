<template>
  <div class="hello">
    <h1>HomePage</h1>
    <div class="card card-margin" v-for="status in statuses">
      <div class="card-header">
        <span class="card-name">{{status.user.name}} said...</span>
        <span class="card-time">{{status.created_at | ago}}</span>
      </div>
      <div class="card-body">
        <p class="card-text">{{status.body}}</p>
      </div>
    </div>
    <br/>
    <form class="form-group" @submit.prevent="addStatus">
      <label for="exampleFormControlSelect1">Comment as...</label>
      <select class="form-control" id="exampleFormControlSelect1" v-model="userId" >
        <option v-for="user in users" :value="user.id" :key="user.id"> {{user.name}}</option>
      </select>
      <label for="exampleFormControlTextarea1">Your thoughts here...</label>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="userBody" placeholder="Place your thoughts ere.."></textarea>
      <br />
      <button class="btn btn-primary">Submit</button>
    </form>

  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'Home',
  props: {
    msg: String
  },
  data() {
    return {
      statuses: [],
      users: [],
      userId : 1,
      userBody: ""
    }
  },
  methods: {

    addStatus() {
      // alert("Add Status" + this.userId + " - " + this.userBody)
      var self = this
      axios.post('http://localhost:3000/statuses', { 'user_id' : this.userId, 'body' : this.userBody })
      .then(response => {
        self.statuses.push(response.data)
      })
    }
  },
  filters: {
    ago(date) {
      return moment(date).fromNow()
    }
  },
  created() {
    var self = this
    axios.get('http://localhost:3000/statuses')
    .then(response => {
      console.log(response.data)
      self.statuses = response.data
    })
    .catch(error => {
      console.log(error)
    })

    axios.get('http://localhost:3000/users')
    .then(response => {
      console.log(response.data)
      self.users = response.data
    })
    .catch(error => {
      console.log(error)
    })

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-name {
  float: left;
}
.card-time {
  float: right;
}
.card-margin {
  margin-bottom: 10px;
}
</style>
