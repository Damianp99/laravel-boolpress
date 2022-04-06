<template>
  <div>
    <PostCard v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script>
import PostCard from "./PostCard.vue";
export default {
  name: "PostIndex",
  components: { PostCard },
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