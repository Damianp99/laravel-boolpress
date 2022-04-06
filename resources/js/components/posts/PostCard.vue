<template>
  <div class="card m-3" v-if="post">
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
</template>

<script>
export default {
  name: "PostCard",
  props: ["post"],
};
</script>

<style>
</style>