<template>
  <div
    :style="[
      'background: url(' + image + ')',
      'background-size: cover',
      'background-position: center',
    ]"
    class="rounded-xl shadow-sm border border-1 flex flex-col justify-between h-72"
  >
    <div class="bg-gradient-to-b from-black/70 p-3 rounded-t-xl h-32">
      <h2 class="font-bold text-white text-xl drop-shadow-md">{{ name }}</h2>
      <!-- <span class="bg-white text-xs px-2 py-1 rounded text-red-500">🔥Best Seller</span> -->
    </div>
    <div class="flex justify-end p-3">
      <div
        class="rounded-full bg-white inline-block px-2 py-1 text-xs font-bold shadow-sm"
      >
        ₱{{ price.toFixed(2) }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {},
    price: {},
    image: {},
  },
};
</script>

<style></style>
