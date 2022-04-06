<template>
  <div
    class="
      not-found
      d-flex
      flex-column
      justify-content-center
      align-items-center
    "
  >
    <h2 class="text-muted text-center my-5">404 | Not Found</h2>
    <button class="btn btn-secondary" @click="$router.back()">Indietro</button>
  </div>
</template>

<script>
export default {
  name: "NotFoundPage",
};
</script>

<style>
</style>