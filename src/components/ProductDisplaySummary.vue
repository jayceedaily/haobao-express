<template>
  <div
    class="border rounded-lg hover:shadow-lg cursor-pointer h-30"
    @click="showVariantHandler"
  >
    <div class="p-5">
      <div class="flex flex-wrap">
        <div class="text-xl sm:w-full">
          {{ product.name }}
        </div>
        <div class="w-full text-xl">
          <strong
            ><span class="text-sm">₱</span>{{ priceResolver(product)[0] }}
          </strong>
          <strong v-if="priceResolver(product)[1]">
            - <span class="text-sm">₱</span>{{ priceResolver(product)[1] }}
          </strong>
        </div>
      </div>
      <div class="flex gap-2 flex-wrap">
        <template v-for="(tag, index) in product.tags" :key="index">
          <span
            v-if="tag == 'BEST_SELLER'"
            class="text-xs font-medium px-2 py-1 bg-red-100 rounded"
          >
            🔥 Best Seller</span
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

      <div v-if="showVariant" class="mt-5">
        <div class="flex flex-col gap-3 flex-start">
          <hr />

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
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
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

    return {
      showVariant,
      priceResolver,
      showVariantHandler,
    };
  },
};
</script>

<style></style>
