<template>
  <div>
    <p>Counter : {{counter}}</p>
    <button @click="counter=counter+1">Increment</button>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  data() {
    return {
      counter: 1
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
