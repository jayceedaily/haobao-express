<template>
  <div class="w-full bg-yellow-500 py-10 flex justify-between px-5">
    <!-- <div class="text-3xl font-bold flex gap-3">
      <span>Hao Bao Express</span> <ChevronDoubleRightIcon class="w-8" />
    </div>
    <div class="flex content-center">
      <div>
        <ShoppingBagIcon class="w-8" />
      </div>
      <div class="text-3xl font-bold ml-5">0</div>
    </div> -->
  </div>
  <!-- {{ categories }} -->
  <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 p-10">
    <div
      v-for="(product, index) in products"
      :key="index"
      class="border rounded-lg hover:shadow-lg cursor-pointer"
    >
      <div class="p-5">
        <div>
          <p class="text-xl">
            {{ product.name }}
          </p>

          <strong> ₱{{ priceResolver(product)[0] }} </strong>
          <strong v-if="priceResolver(product)[1]">
            - ₱{{ priceResolver(product)[1] }}
          </strong>
        </div>
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

export default {
  name: "App",
  components: {
    ShoppingBagIcon,
    ChevronDoubleRightIcon,
  },
  setup() {
    const addOns = ref([
      {
        name: "Sweet & Sour Pork",
        price: 85,
      },
      {
        name: "Szechuan Pork",
        price: 85,
      },
      {
        name: "Wonton Dumplings",
        price: 85,
      },
      {
        name: "Shanghai Rolls - 6Pcs",
        price: 85,
      },
      {
        name: "Fried Chicken - 1Pc",
        price: 65,
      },
      {
        name: "Fried Egg",
        price: 25,
      },
    ]);

    const products = ref([
      {
        name: "Beef Wonton Mami",
        price: 260,
        category: "Specialty",
      },
      {
        name: "Beef Mami",
        price: 190,
        category: "Specialty",
      },
      {
        name: "Wonton Mami",
        price: 175,
        category: "Specialty",
      },
      {
        name: "Wonton Soup",
        price: 125,
        category: "Specialty",
      },
      {
        name: "Extra Noodles",
        price: 50,
        category: "Specialty",
      },
      {
        name: "Fried Chicken",
        category: "Platt",
        variants: [
          {
            name: "4PC Fried Chicken - Classic",
            price: 260,
          },
          {
            name: "6PC Fried Chicken - Classic",
            price: 390,
          },
          {
            name: "8PC Fried Chicken - Classic",
            price: 520,
          },
          {
            name: "4PC Fried Chicken - Hao Bao Original",
            price: 260,
          },
          {
            name: "6PC Fried Chicken - Hao Bao Original",
            price: 390,
          },
          {
            name: "8PC Fried Chicken - Hao Bao Original",
            price: 520,
          },
          {
            name: "4PC Fried Chicken - Orange Chicken",
            price: 260,
          },
          {
            name: "6PC Fried Chicken - Orange Chicken",
            price: 390,
          },
          {
            name: "8PC Fried Chicken - Orange Chicken",
            price: 520,
          },
          {
            name: "4PC Fried Chicken - Honey Garlic",
            price: 260,
          },
          {
            name: "6PC Fried Chicken - Honey Garlic",
            price: 390,
          },
          {
            name: "8PC Fried Chicken - Honey Garlic",
            price: 520,
          },
          {
            name: "4PC Fried Chicken - Soy Garlic",
            price: 260,
          },
          {
            name: "6PC Fried Chicken - Soy Garlic",
            price: 390,
          },
          {
            name: "8PC Fried Chicken - Soy Garlic",
            price: 520,
          },
          {
            name: "4PC Fried Chicken - Szechuan",
            price: 260,
          },
          {
            name: "6PC Fried Chicken - Szechuan",
            price: 390,
          },
          {
            name: "8PC Fried Chicken - Szechuan",
            price: 520,
          },
        ],
      },
      {
        name: "Beef Brocolli",
        price: 285,
        category: "Platter",
      },
      {
        name: "Sweet & Sour Pork",
        price: 245,
        category: "Platter",
      },
      {
        name: "Szechuan Pork",
        price: 245,
        category: "Platter",
      },
      {
        name: "Spring Rolls",
        price: 145,
        category: "Platter",
      },
      {
        name: "Shanghai Rolls - 15Pcs",
        price: 195,
        category: "Platter",
      },
      {
        name: "Stir Fried Bok Choy",
        price: 195,
        category: "Platter",
      },
      {
        name: "Soy Garlic Spinach",
        price: 120,
        category: "Platter",
      },
      {
        name: "Chicken Sandwich",
        price: 85,
        category: "Sandwich",
      },
      {
        name: "Premium Leche Flan",
        price: 85,
        category: "Dessert",
      },
      {
        name: "Shrimp Fried Rice - Platter",
        price: 360,
        category: "Fried Rice",
      },
      {
        name: "Yang Chow - Platter",
        price: 315,
        category: "Fried Rice",
      },
      {
        name: "Pork Chow Fan - Platter",
        price: 265,
        category: "Fried Rice",
      },
      {
        name: "Hao Bao Egg Fried Rice - Platter",
        price: 360,
        category: "Fried Rice",
      },
      {
        name: "Hao Bao Egg Fried Rice - Rice Bowl",
        price: 85,
        category: "Rice Bowls",
        variants: addOns,
      },
      {
        name: "Pork Chow Fan - Rice Bowl",
        price: 95,
        category: "Rice Bowls",
        variants: addOns,
      },
    ]);

    const categories = computed(() => {
      let _categories = [];

      products.value.forEach((_product) => {
        if (!_categories.includes(_product.category)) {
          _categories.push(_product.category);
        }
      });

      return _categories;
    });

    const priceResolver = (product) => {
      let price = product.price ? [product.price] : [];

      if (product.variants && product.variants.length) {
        product.variants.forEach((_product) => {
          console.log(_product.price, product.price);
          price.push(
            product.price ? _product.price + product.price : _product.price
          );
        });
      }

      let productPrice = [price.min()];

      if (!productPrice.includes(price.max())) {
        productPrice.push(price.max());
      }

      return productPrice;
    };
    return {
      products,
      priceResolver,
      categories,
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
