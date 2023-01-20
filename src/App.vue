<template>
  <div class="container mx-auto sm:max-w-[400px]">
    <router-view />
  </div>
  <bottom-nav />
</template>

<script>
import BottomNav from "@/views/Layout/BottomNav.vue";

export default {
  components: {
    BottomNav,
  },
};
</script>

<style></style>
