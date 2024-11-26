<template>
  <div>
    <div class="relative">
      <div class="absolute top-[-20px] flex flex-col">
        <div
          v-for="(tag, index) in item.tags"
          :key="index"
          class="text-white bg-primary font-medium text-base px-3 py-1 rounded-full mb-1 flex shadow-x "
        >
          {{ tag }}
        </div>
      </div>
      <div class="max-w-[350px] max-h-[200px]">
        <img :src="item.image" class="max-h-[200px] mx-auto" />
      </div>
    </div>
    <div class="text-center flex flex-col gap-2">
      <div>
        <div class="font-bold text-xl">{{ item.name }}</div>
      </div>
      <div class="flex gap-3 justify-center">
        <variant-price v-if="item.variants.length" :variants="item.variants" />
        <div v-else class="font-medium text-lg">₱{{ item.price }}</div>
      </div>

      <div>
        <button
          class="rounded-xl font-medium bg-primary text-white py-2 px-6"
          @click="handleAddToBasket"
        >
          Add to Basket
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import VariantPrice from "./VariantPrice.vue";

const props = defineProps({
  item: {
    type: Object,
  },
});

const emit = defineEmits(["addToBasket"]);

const handleAddToBasket = () => emit("addToBasket", props.item);
</script>

<style></style>
