<template>
  <a :href="'/haobao-auf/' + product.id" class="border rounded-xl hover:shadow-lg cursor-pointer h-30">
    <template v-if="product.images">
      <!-- <img src="../assets/beef-wonton.jpg" alt="" /> -->

      <img
        class="rounded-t-xl"
        v-for="(image, index) in product.images"
        :src="getImgUrl(image)"
        alt=""
        :key="index"
      />
    </template>
    <div class="p-5 flex gap-3 lg:justify-between flex-col sm:flex-row">
      <div>
        <div class="flex flex-wrap">
          <div class="text-xl sm:w-full">
            {{ product.name }}
          </div>
          <div class="w-full">
            <strong class="text-xl"
              ><span class="text-sm">₱</span>{{ priceResolver(product)[0] }}
            </strong>
            <strong v-if="priceResolver(product)[1]" class="text-lg">
              - <span class="text-sm">₱</span>{{ priceResolver(product)[1] }}
            </strong>
          </div>
        </div>
        <div class="flex gap-2 flex-wrap">
          <template v-for="(tag, index) in product.tags" :key="index">
            <span
              v-if="tag == 'POPULAR'"
              class="text-xs font-medium px-2 py-1 bg-red-100 rounded"
            >
              🔥 Popular</span
            >
            <span
              v-if="tag == 'RECOMMENDED'"
              class="text-xs font-medium px-2 py-1 bg-yellow-100 rounded"
            >
              ✨ Recommended</span
            >
            <span
              v-if="tag == 'LOW_CALORIES'"
              class="text-xs font-medium px-2 py-1 bg-green-100 rounded"
            >
              🥬 Low Calories</span
            >
            <span
              v-if="tag == 'HIGH_PROTEIN'"
              class="text-xs font-medium px-2 py-1 bg-pink-100 rounded"
            >
              🥩 High Protein</span
            >
            <span
              v-if="tag == 'NEW'"
              class="text-xs font-medium px-2 py-1 bg-green-100 rounded"
            >
              ⭐ NEW</span
            >
          </template>
        </div>
      </div>

      <div
        v-if="product.variants && product.variants.length"
        class="flex justify-end"
      >
        <!-- <ChevronDownIcon class="w-5 text-gray-500" /> -->
        <div>
          <button
            @click="showVariantHandler"
            class="flex items-center gap-3 p-3 font-bold bg-black text-white rounded-full"
          >
            <!-- <Squares2X2Icon class="w-5" /> -->
            <!-- <HeartIcon class="w-5" /> -->

            <div class="text-sm">View Option</div>
          </button>
        </div>
      </div>
      <!-- <div v-else class="flex justify-end">
        <div>
          <button
            class="flex items-center gap-3 p-3 font-bold bg-gray-200 text-gray-400 rounded-full"
          >
            <HeartIcon class="w-5" />
            <div class="text-sm">Add to Bag</div>
          </button>
        </div>
      </div> -->
    </div>
  </a>
  <div v-if="showVariant" class="mt-5">
    <div
      class="flex flex-col gap-3 flex-start pl-5 border-l-yellow-500 border-l-2"
    >
      <product-display-summary
        v-if="product.price"
        :product="{ ...product, variants: [] }"
      />

      <product-display-summary
        v-for="(variant, index) in product.variants"
        :key="index"
        :product="variant"
      />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent, ref } from "vue";
import { ChevronDownIcon } from "@heroicons/vue/24/outline";
import {
  ShoppingBagIcon,
  Squares2X2Icon,
  HeartIcon,
} from "@heroicons/vue/24/solid";

export default {
  components: {
    ChevronDownIcon,
    ShoppingBagIcon,
    Squares2X2Icon,
    HeartIcon,
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const showVariant = ref(false);

    const priceResolver = (product) => {
      let price = product.price ? [product.price] : [];

      if (product.variants && product.variants.length) {
        product.variants.forEach((_product) => {
          price.push(_product.price);
        });
      }

      let productPrice = [price.min()];

      if (!productPrice.includes(price.max())) {
        productPrice.push(price.max());
      }

      return productPrice;
    };

    const showVariantHandler = () => {
      if (props.product.variants && props.product.variants.length) {
        showVariant.value = !showVariant.value;
      }
    };

    const getImgUrl = (src) => {
      return new URL(src, import.meta.url).href
      // return await import(src);

    };

    return {
      showVariant,
      priceResolver,
      showVariantHandler,
      getImgUrl,
    };
  },
};
</script>

<style></style>
