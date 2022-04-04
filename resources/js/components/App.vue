<template>
  <div>
    <header>
      <Header />
    </header>
    <main>
      <PostIndex />
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
