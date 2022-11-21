<template>
  <div class="w-full bg-yellow-500 py-10 flex justify-between px-5">
    <img src="./assets/haobao.png" alt="" class="w-24 mx-auto" />
  </div>
  <div class="p-3 flex flex-col gap-10 container mx-auto lg:w-1/3 md:w-2/3" >
    <div v-for="(category, index) in categories" :key="index">
      <h3 class="text-lg font-bold mb-3 uppercase">{{ category }}</h3>
      <div
        class="grid grid-cols-1 gap-3 items-start"
      >
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
    const addOns = {
      modify(name, price) {
        let newValue = [];

        this.value.forEach((addOn) => {
          newValue.push({
            ...addOn,
            name: name + " w/ " + addOn.name,
            price: price + addOn.price,
          });
        });

        return newValue;
      },
      value: [
        {
          name: "Sweet & Sour Pork",
          category: "Add-Ons",
          price: 85,
          tags: ["NEW", "RECOMMENDED"],
        },
        {
          name: "Szechuan Pork",
          category: "Add-Ons",
          price: 85,
          tags: ["NEW"],
        },
        {
          name: "Wonton Dumplings",
          category: "Add-Ons",
          price: 80,
          tags: ["BEST_SELLER"],
        },
        {
          name: "Shanghai Rolls - 6Pcs",
          category: "Add-Ons",
          price: 80,
          tags: ["BEST_SELLER"],
        },
        {
          name: "Fried Chicken - 1Pc",
          category: "Add-Ons",
          price: 65,
        },
        {
          name: "Fried Egg",
          category: "Add-Ons",
          price: 25,
        },
      ],
    };

    const products = ref([
      {
        id: 1,
        name: "Beef Wonton Mami",
        price: 260,
        category: "Specialty",
        tags: ["BEST_SELLER", "RECOMMENDED"],
      },
      {
        id: 2,
        name: "Beef Mami",
        price: 190,
        category: "Specialty",
      },
      {
        id: 2,
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
        category: "Familiy Size Entree",
        tags: ["BEST_SELLER"],
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
            tags: ["BEST_SELLER", "RECOMMENDED"],
          },
          {
            name: "6PC Fried Chicken - Hao Bao Original",
            price: 390,
            tags: ["BEST_SELLER", "RECOMMENDED"],
          },
          {
            name: "8PC Fried Chicken - Hao Bao Original",
            price: 520,
            tags: ["BEST_SELLER", "RECOMMENDED"],
          },
          {
            name: "4PC Fried Chicken - Orange Chicken",
            price: 260,
            tags: ["BEST_SELLER"],
          },
          {
            name: "6PC Fried Chicken - Orange Chicken",
            price: 390,
            tags: ["BEST_SELLER"],
          },
          {
            name: "8PC Fried Chicken - Orange Chicken",
            price: 520,
            tags: ["BEST_SELLER"],
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
            tags: ["NEW"],
          },
          {
            name: "6PC Fried Chicken - Soy Garlic",
            price: 390,
            tags: ["NEW"],
          },
          {
            name: "8PC Fried Chicken - Soy Garlic",
            price: 520,
            tags: ["NEW"],
          },
          {
            name: "4PC Fried Chicken - Szechuan",
            price: 260,
            tags: ["NEW"],
          },
          {
            name: "6PC Fried Chicken - Szechuan",
            price: 390,
            tags: ["NEW"],
          },
          {
            name: "8PC Fried Chicken - Szechuan",
            price: 520,
            tags: ["NEW"],
          },
        ],
      },
      {
        name: "Beef Brocolli",
        price: 285,
        category: "Familiy Size Entree",
        tags: ["NEW"],
      },
      {
        name: "Sweet & Sour Pork",
        price: 245,
        category: "Familiy Size Entree",
        tags: ["NEW", "RECOMMENDED"],
      },
      {
        name: "Szechuan Pork",
        price: 245,
        category: "Familiy Size Entree",
        tags: ["NEW"],
      },
      {
        name: "Spring Rolls",
        price: 145,
        category: "Familiy Size Entree",
      },
      {
        name: "Shanghai Rolls - 15Pcs",
        price: 195,
        category: "Familiy Size Entree",
        tags: ["BEST_SELLER"],
      },
      {
        name: "Stir Fried Bok Choy",
        price: 195,
        category: "Familiy Size Entree",
        tags: ["RECOMMENDED"],
      },
      {
        name: "Soy Garlic Spinach",
        price: 120,
        category: "Familiy Size Entree",
      },

      {
        name: "Shrimp Fried Rice - Family Platter",
        price: 360,
        category: "Fried Rice - Family Platter",
      },
      {
        name: "Yang Chow - Family Platter",
        price: 315,
        category: "Fried Rice - Family Platter",
        tags: ["BEST_SELLER", "RECOMMENDED"],
      },
      {
        name: "Pork Chow Fan - Family Platter",
        price: 265,
        category: "Fried Rice - Family Platter",
      },
      {
        name: "Hao Bao Egg Fried Rice - Family Platter",
        price: 360,
        category: "Fried Rice - Family Platter",
        tags: ["BEST_SELLER"],
      },
      {
        name: "Hao Bao Egg Fried Rice",
        price: 85,
        category: "Rice Bowls",
        tags: ["RECOMMENDED"],
        variants: addOns.modify("Hao Bao Egg Fried Rice", 85),
      },
      {
        name: "Pork Chow Fan",
        price: 95,
        category: "Rice Bowls",
        variants: addOns.modify("Pork Chow Fan", 95),
      },
      {
        name: "Yang Chow",
        price: 110,
        category: "Rice Bowls",
        tags: ["RECOMMENDED", "BEST_SELLER"],
        variants: addOns.modify("Yang Chow", 110),
      },
      {
        name: "Shrimp Fried Rice",
        price: 125,
        category: "Rice Bowls",
        variants: addOns.modify("Shrimp Fried Rice", 125),
      },

      {
        name: "Shrimp Chow Mein - Family Platter",
        price: 390,
        category: "Chow Mein - Family Platter",
      },
      {
        name: "Beef Chow Mein - Family Platter",
        price: 345,
        category: "Chow Mein - Family Platter",
      },
      {
        name: "Pork Chow Mein - Family Platter",
        price: 315,
        category: "Chow Mein - Family Platter",
        tags: ["RECOMMENDED", "BEST_SELLER"],
      },
      {
        name: "Vegetable Chow Mein - Family Platter",
        price: 315,
        category: "Chow Mein - Family Platter",
      },

      {
        name: "Shrimp Chow Mein",
        price: 130,
        category: "Chow Mein Bowls",
        variants: addOns.modify("Shrimp Chow Mein", 130),
      },
      {
        name: "Beef Chow Mein",
        price: 115,
        category: "Chow Mein Bowls",
        variants: addOns.modify("Beef Chow Mein", 115),
      },
      {
        name: "Pork Chow Mein",
        price: 105,
        category: "Chow Mein Bowls",
        tags: ["RECOMMENDED", "BEST_SELLER"],
        variants: addOns.modify("Pork Chow Mein", 105),
      },
      {
        name: "Vegetable Chow Mein",
        price: 105,
        category: "Chow Mein Bowls",
        variants: addOns.modify("Vegetable Chow Mein", 105),
      },
      ...addOns.value,
      {
        name: "Chicken Sandwich",
        price: 85,
        category: "Others",
      },
      {
        name: "Premium Leche Flan",
        price: 85,
        category: "Others",
        tags: ["RECOMMENDED"],
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
