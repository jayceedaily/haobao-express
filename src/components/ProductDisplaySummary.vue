<template>
  <div
    class="border rounded-lg hover:shadow-lg cursor-pointer"
    @click="showVariantHandler"
  >
    <div class="p-5">
      <div class="flex flex-wrap">
        <div class="text-xl lg:w-2/3 sm:w-full">
          {{ product.name }}
        </div>
        <div class="lg:w-1/3 w-full lg:text-right">
          <strong> ₱{{ priceResolver(product)[0] }} </strong>
          <strong v-if="priceResolver(product)[1]">
            - ₱{{ priceResolver(product)[1] }}
          </strong>
        </div>
      </div>

      <div v-if="showVariant" class="mt-5">
        <div class="flex flex-col gap-3 flex-start">
          <hr />

          <product-display-summary v-if="product.price" :product="{ ...product, variants: [] }" />

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
