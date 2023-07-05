<template>
  <div class="container mx-auto sm:max-w-[400px]">
    <router-view />
    <!-- <bottom-nav /> -->
  </div>
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
