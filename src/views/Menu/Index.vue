<template>
  <cart-modal
    v-if="showCart"
    @close="showCart = false"
    :cart="cart"
    @delete="handleDelete"
  />
  <selected-modal
    v-if="selectedItem"
    :selectedItem="selectedItem"
    @addToCart="handleAddToCart"
    @close="selectedItem = null"
  />

  <div class="max-w-4xl mx-auto flex gap-10 flex-col pb-20 px-3">

    <div class="bg-red-100 text-red-500 px-10 py-10 font-bold text-center rounded-lg text-xl border-red-500 border-2">
      THIS PAGE IS NOT FOR CUSTOMER USE AND IS FOR DEV TESTING ONLY
    </div>

    <div class="flex justify-between">
      <div class="flex w-full px-5">
        <button @click="showCart = true">
          <div class="relative w-12 h-12">
            <div
              class="absolute text-xs px-2 py-1 bg-primary shadow-md text-white rounded-full right-[-10px] top-[-6px] font-bold"
            >
              {{ cart.length }}
            </div>

            <ShoppingBagIcon class="text-primary h-12 w-12" />
          </div>
        </button>
      </div>
      <div class="flex gap-3 flex-wrap w-full flex-none">
        <button
          class="font-medium px-3 py-1 rounded-full uppercase whitespace-nowrap"
          @click="filter = null"
          :class="
            filter == null
              ? 'bg-primary text-white'
              : 'border-gray-300 text-gray-400 border-2 '
          "
        >
          Show All
        </button>
        <button
          v-for="(category, index) in categories"
          :key="index"
          class="font-medium px-3 py-1 rounded-full uppercase whitespace-nowrap"
          :class="
            filter == category
              ? 'bg-primary text-white'
              : 'border-gray-300 text-gray-400 border-2 '
          "
          @click="filter = category"
        >
          {{ category }}
        </button>
      </div>
    </div>
    <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-y-20 gap-2">
      <product-card
        v-for="(item, index) in filteredItems"
        :key="index"
        class="flex flex-col justify-end"
        :item="item"
        @addToBasket="
          () =>
            (selectedItem = { ...item, quantity: item.min_transaction ?? 1 })
        "
      />
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from "vue";
import HbModal from "../../components/HbModal.vue";
import ProductCard from "./Partials/ProductCard.vue";
import { ShoppingBagIcon } from "@heroicons/vue/24/outline";
import CartModal from "./Partials/CartModal.vue";
import { items as itemsJson } from "./Partials/items";
import SelectedModal from "./Partials/SelectedModal.vue";

const items = itemsJson;

const selectedItem = ref(null);

const showCart = ref(false);

const cart = ref([]);

const handleAddToCart = (item) => {
  cart.value.push(item);
  selectedItem.value = null;
};

try {
  let storedCart = JSON.parse(localStorage.getItem("cart"));

  if (storedCart != null) {
    cart.value = storedCart;
  }
} catch (error) {
  localStorage.removeItem("cart");
  cart.value = [];
}

watch(
  cart,
  (value) => {
    localStorage.setItem("cart", JSON.stringify(value));
  },
  {
    immediate: true,
    deep: true,
  }
);

const handleDelete = (index) => {
  cart.value = cart.value.filter((item, i) => {
    return i != index;
  });
};

const filter = ref(null);

const filteredItems = computed(() => {
  return items.filter((item) => {
    if (filter.value == null) {
      return true;
    }

    return filter.value == item.category;
  });
});

const categories = computed(() => {
  let _categories = [];

  items.forEach((item) => {
    if (_categories.includes(item.category) == false) {
      _categories.push(item.category);
    }
  });

  return _categories;
});
</script>
