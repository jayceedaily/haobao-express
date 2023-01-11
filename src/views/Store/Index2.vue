<template>
  <div class="container mx-auto lg:w-1/3">
    <nav class="sticky top-0 z-10">
      <div class="bg-yellow-500 justify-between flex">
        <div class="bg-yellow-400 p-4">
          <Bars3Icon class="w-6" />
        </div>
        <div class="p-4">
          <ShoppingBagIcon class="w-6" />
        </div>
      </div>
    </nav>
    <div class="px-3 py-10">
      <!-- STORE TITLE -->
      <div class="mb-3">
        <h1 class="font-bold text-2xl">Hao Bao Wonton Noodles</h1>

        <div class="flex gap-3">
          <!-- <div class="text-yellow-500 flex">
          <StarIcon class="w-4" />
          <StarIcon class="w-4" />
          <StarIcon class="w-4" />
          <StarIcon class="w-4" />
          <StarIconOutline class="w-4" />
        </div> -->
          <p class="text-gray-400">2.4km away</p>

          <p class="font-medium flex gap-1">
            <ClockIcon class="w-4 inline-block text-yellow-500" />
            <span>Delivery 45 min</span>
          </p>
        </div>
      </div>
      <!-- STORE TITLE END -->

      <!-- FILTER -->
      <div class="mb-5 flex gap-2 overflow-auto hide-scroll">
        <span class="bg-yellow-500 px-5 py-2 rounded-full text-sm font-medium"
          >All</span
        >
        <span class="bg-gray-200 px-5 py-2 rounded-full text-sm font-medium"
          >Popular</span
        >
        <span class="bg-gray-200 px-5 py-2 rounded-full text-sm font-medium"
          >Chicken</span
        >
        <span class="bg-gray-200 px-5 py-2 rounded-full text-sm font-medium"
          >Beef</span
        >
        <span class="bg-gray-200 px-5 py-2 rounded-full text-sm font-medium"
          >Pork</span
        >
        <span class="bg-gray-200 px-5 py-2 rounded-full text-sm font-medium"
          >Rice</span
        >
        <span
          class="bg-gray-200 px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap"
          >Chow Mein</span
        >
        <span class="bg-gray-200 px-5 py-2 rounded-full text-sm font-medium"
          >Mami</span
        >
      </div>
      <!-- FILTER END -->
      <!-- STORE ITEMS -->
      <div class="grid grid-cols-2 gap-3">
        <food-card
          v-for="(item, index) in items"
          :key="index"
          :name="item.name"
          :price="item.price"
          :image="item.image"
        />
      </div>
      <!-- STORE ITEMS END -->
    </div>
  </div>
</template>

<script>
import {
  ClockIcon,
  StarIcon as StarIconOutline,
  ShoppingBagIcon,
  Bars3Icon,
} from "@heroicons/vue/24/outline";
import { StarIcon } from "@heroicons/vue/24/solid";
import FoodCard from "./FoodCard.vue";
export default {
  components: {
    ClockIcon,
    StarIconOutline,
    StarIcon,
    ShoppingBagIcon,
    Bars3Icon,
    FoodCard,
  },
  setup() {
    const items = [
      {
        name: "Beef Wonton Mami",
        price: 260,
        image:
          "https://images.unsplash.com/photo-1568096889942-6eedde686635?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      },
      {
        name: "4pc Fried Chicken",
        price: 260,
        image:
          "https://images.unsplash.com/photo-1626082896492-766af4eb6501?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8RnJpZWQlMjBDaGlja2VufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
      },
      {
        name: "Yang Chow Platter",
        price: 245,
        image:
          "https://images.unsplash.com/photo-1609570324378-ec0c4c9b6ba8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZnJpZWQlMjByaWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
      },
      {
        name: "4pc Wonton Dumplings",
        price: 80,
        image:
          "https://images.unsplash.com/photo-1617183545317-9b62b9b24812?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d29udG9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
      },
      {
        name: "Vegetable Chow Mein",
        price: 245,
        image:
          "https://images.unsplash.com/photo-1634864572865-1cf8ff8bd23d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hvdyUyMG1laW58ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
      },
      {
        name: "Sweet & Sour Pork",
        price: 245,
        image:
          "https://images.unsplash.com/photo-1627662236973-4fd8358fa206?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      },
      {
        name: "Shanghai Rolls",
        price: 195,
        image:
          "https://sweetsimplevegan.com/wp-content/uploads/2020/09/Vegan-Lumpiang-Shanghai-Filipino-Spring-Rolls-Sweet-Simple-Vegan-4.jpg",
      },
    ];

    return {
      items,
    };
  },
};
</script>

<style></style>
