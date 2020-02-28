<template>
  <div>
    <Header />
    <div class="mt-12">
      <nuxt />
    </div>
  </div>
</template>

<script>
import Header from "~/components/Header.vue";

export default {
  components: {
    Header
  }
};
</script>

<style>
</style>
