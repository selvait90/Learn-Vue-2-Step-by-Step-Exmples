<template>
  <div class="hello">
    <h1>HomePage</h1>
    <div class="card">
      <div class="card-header">
        <span class="card-name">Selvakumar</span>
        <span class="card-time">1 minute ago</span>
      </div>
      <div class="card-body">
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
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
</style>
