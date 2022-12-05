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

import ProductDisplaySummary from "../components/ProductDisplaySummary.vue";
import { products } from "../product.js";
import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";

export default {
  name: "App",
  components: {
    ShoppingBagIcon,
    ChevronDoubleRightIcon,
    ProductDisplaySummary,
    GoogleMap,
    Marker,
  },

  setup() {
    const cart = ref([]);

    const geo = ref({
      ready: false, //Add ready:false to stop map from loading, and then when changed to true map will auto load
      // **GPS** : will trigger geolocation plugin , to find users location by GPS
      // **geolocation** : will try to find the place by lat, lng
      // **address**: will try to find the place by address query
      // **manually**: manually preset values

      // If GPS is selected as a fallbackProcedure and it fails , then address fallback is triggered and if address fails geolocation is triggered
      fallbackProcedure: "gps", //gps | geolocation | address | manually
      zoom: 17, //Default Zoom
      geolocation: {
        // If GPS and Find by address fails then, map will be positioned by a default geolocation
        lat: 31.73858,
        lng: -35.98628,
        zoom: 2,
      },
      address: {
        query: "Albania, Tirane", //If GPS fails, Find by address is triggered
        zoom: 10,
      },
      manually: {
        address_description: "21 Dhjetori, Tirana, Albania",
        city: "Tirana",
        country: "Albania",
        lat: 41.3267905,
        lng: 19.8060475,
        state: "Tirana County",
        zip_code: "",
        zoom: 17,
      },
      place: {},
    });

    const addToCart = (product) => {
      cart.value.push(product);
    };
    const displayVariants = ref([]);

    const center = { lat: 15.1457478, lng: 120.5907907 };
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

    const getMapData = (place) => {
      geo.value.place = place;
    };
    return {
      getMapData,
      products,
      categories,
      cart,
      displayVariants,
      addToCart,
      productByCategory,
      center,
      geo,
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
