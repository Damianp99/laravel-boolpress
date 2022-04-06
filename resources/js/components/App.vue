<template>
  <div>
    <Header />
    <main>
      <div class="container my-3">
        <router-view> </router-view>
      </div>
    </main>
    <footer></footer>
  </div>
</template>

<script>
import Header from "./Header.vue";
import PostIndex from "./posts/PostIndex.vue";
export default {
  name: "App",
  components: {
    Header,
    PostIndex,
  },
  mounted() {
    console.log("Component mounted.");
  },
};
</script>
