<template>
  <div class="w-full bg-yellow-500 py-10 flex justify-between px-5">
    <img src="./assets/haobao.png" alt="" class="w-24 mx-auto" />
  </div>
  <div
    class="p-3 flex flex-col gap-10 container mx-auto lg:w-2/3 md:w-3/4 xl:w-1/3"
  >
    <div v-for="(category, index) in categories" :key="index">
      <h3 class="text-lg font-bold mb-3 uppercase">{{ category }}</h3>
      <div class="grid grid-cols-1 gap-3 items-start">
        <product-display-summary
          v-for="(product, index) in productByCategory(category)"
          :key="index"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "@vue/reactivity";
import {
  ShoppingBagIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/vue/24/outline";

import ProductDisplaySummary from "./components/ProductDisplaySummary.vue";
import {products} from "./product";

export default {
  name: "App",
  components: {
    ShoppingBagIcon,
    ChevronDoubleRightIcon,
    ProductDisplaySummary,
  },
  setup() {

    
    const cart = ref([]);
    const addToCart = (product) => {
      cart.value.push(product);
    };
    const displayVariants = ref([]);

    // const product =products;

    const categories = computed(() => {
      let _categories = [];

      products.value.forEach((_product) => {
        if (!_categories.includes(_product.category)) {
          _categories.push(_product.category);
        }
      });

      return _categories;
    });

    const productByCategory = (category) => {
      return products.value.filter(
        (_product) => _product.category === category
      );
    };

    return {
      products,
      categories,
      cart,
      displayVariants,
      addToCart,
      productByCategory,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Rubik", sans-serif;
}
</style>
