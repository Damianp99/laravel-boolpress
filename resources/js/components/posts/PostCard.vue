<template>
  <div class="card m-3" v-if="post">
    <div class="card-header d-flex justify-content-between align-items-center">
      <h3>POST</h3>
      <router-link
        :to="{ name: 'post.show', params: { id: post.id } }"
        class="btn btn-primary"
        >SHOW LINK</router-link
      >
    </div>
    <div class="card-body">
      <h3 class="card-title">{{ post.title }}</h3>
      <div class="d-flex">
        <p class="card-text">
          {{ post.description }}
        </p>
      </div>
    </div>
    <div class="card-footer">
      <!-- da inserire info generali -->
      <span>{{ post.updated_at }}</span>
      <!-- <span
            v-for="category in post.category"
            :key="category.id"
            :style="`background-color: ${category.color}`"
            class="badge badge-pill"
            >{{ category.id }}</span
          > -->
      <span></span>
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