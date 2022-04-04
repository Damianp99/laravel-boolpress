<template>
  <div class="container">
    <ul>
      <li v-for="post in posts" :key="post.id">
        <div>
          <h3>{{ post.title }}</h3>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PostIndex",
  components: {},
  data() {
    return {
      posts: [],
      indexUrl: "http://localhost:8000/api/posts",
    };
  },
  methods: {
    getPosts() {
      axios
        .get("http://localhost:8000/api/posts")
        .then((res) => {
          this.posts = res.data;
          //console.log(res.data);
        })
        .catch((err) => {
          console.error(err);
        })
        .then(() => {
          console.log("Api call is over");
        });
    },
  },
  mounted() {
    this.getPosts();
  },
};
</script>

<style>
</style>