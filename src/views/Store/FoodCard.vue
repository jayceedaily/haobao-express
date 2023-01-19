<template>
  <div
    :style="[
      'background: url(' + item.image + ')',
      'background-size: cover',
      'background-position: center',
    ]"
    class="rounded-2xl shadow-sm border border-1 flex flex-col justify-between h-72"
  >
    <div class="bg-gradient-to-b from-black/70 p-3 rounded-t-xl h-32">
      <h2 class="font-bold text-white text-xl drop-shadow-md">
        {{ item.name }}
      </h2>

    </div>
    <div class="flex justify-end p-3">
      <div
        class="rounded-full bg-yellow-500 inline-block px-2 py-1 text-xs font-bold shadow-sm"
      >
        ₱{{ item.price.toFixed(2) }}
        <span v-if="priceRange">+</span>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { PlusIcon } from "@heroicons/vue/24/solid";

export default {
  components: {
    PlusIcon,
  },
  props: {
    item: {
      type: Object,
    },
  },
  setup(props) {
    const priceRange = computed(() => {
      if (props.item.modifiers.length === 0) {
        return false;
      }

      let flag = false;

      props.item.modifiers.forEach((modifier) => {
        if (flag) {
          return;
        }

        modifier.items.forEach((item) => {
          if (item.price > 0) {
            flag = true;
            return;
          }
        });
      });

      return flag;
    });

    return {
      priceRange,
    };
  },
};
</script>

<style></style>
