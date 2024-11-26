<template>
  <div class="flex items-center gap-2">
    <div class="font-medium text-lg">
      ₱{{ lowestPricedItem.price }}
      <span
        v-if="
          highestPricedItem.price * (highestPricedItem.min_transaction || 1) !=
          lowestPricedItem.price
        "
        class="text-base text-gray-500"
        > - ₱{{
          highestPricedItem.price * (highestPricedItem.min_transaction || 1)
        }}</span
      >
    </div>
    <div class="text-gray-500">
      ( More Options )
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  variants: {
    type: Array,
    required: true,
  },
});

const lowestPricedItem = computed(() => {
  let _lowestPricedItem = {};

  props.variants.forEach((variant) => {
    if (
      variant.price * (variant.min_transaction || 1) <
        _lowestPricedItem.price ||
      _lowestPricedItem.price == null
    ) {
      _lowestPricedItem = variant;
    }
  });

  return _lowestPricedItem;
});

const highestPricedItem = computed(() => {
  let _highestPricedItem = {};

  props.variants.forEach((variant) => {
    if (
      variant.price * (variant.min_transaction || 1) >
        _highestPricedItem.price ||
      _highestPricedItem.price == null
    ) {
      _highestPricedItem = variant;
    }
  });

  return _highestPricedItem;
});
</script>
