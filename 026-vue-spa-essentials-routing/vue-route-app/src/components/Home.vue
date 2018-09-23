<template>
  <div class="hello">
    <h1>HomePage</h1>
    <div class="card card-margin" v-for="status in statuses">
      <div class="card-header">
        <span class="card-name">{{status.user.name}} said...</span>
        <span class="card-time">{{status.created_at}}</span>
      </div>
      <div class="card-body">
        <p class="card-text">{{status.body}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  },
  data() {
    return {
      statuses: []
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
