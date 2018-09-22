<template>
  <div>
    <h1>Blog Titles</h1>
    <ul>
      <li class="title" v-for="blog in blogs" v-text="blog.title" :key="blog.id"> </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Blog',
  data() {
    return {
      blogs: []
    }
  },
  created() {
  // Make a request for a blogs with a given ID
  // https://jsonplaceholder.typicode.com/posts
  /*
    {
      userId: 1,
      id: 1,
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
    },
  */
    var self = this
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(function (response) {
        // handle success
        self.blogs = response.data
      })
      .catch(function (error) {
        // handle error        
        console.log(error)
      })

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  color: darkred;
  list-style: none;
  text-align: left;
  background-color: lightgray;
  padding: 5px;
  margin: 10px 1px;
  border-radius: 4px;
}
</style>
