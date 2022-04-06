<template>
  <div class="container">
    <div v-for="post in posts" :key="post.id">
      <div class="card m-3">
        <img src="" class="card-img-top" alt="Immagine Post" />
        <div class="card-body">
          <h3 class="card-title">{{ post.title }}</h3>
          <div class="d-flex">
            <p class="card-text col-9">
              {{ post.description }}
            </p>
            <div class="col-3">
              <!-- da inserire info generali -->
              <span>{{ post.updated_at }}</span>
              <span>{{ post.updated_at }}</span>
              <span>{{ post.updated_at }}</span>
            </div>
          </div>
          <a href="#" class="btn btn-primary">SHOW LINK</a>
        </div>
      </div>
    </div>
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