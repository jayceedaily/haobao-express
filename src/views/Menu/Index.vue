<template>
  <div class="flex w-full justify-end px-5">
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

  <cart-modal
    v-if="showCart"
    @close="showCart = false"
    :cart="cart"
    @delete="handleDelete"
  />

  <hb-modal
    v-if="selectedItem"
    :title="selectedItem.name"
    @close="selectedItem = null"
  >
    <template #content>
      <div v-if="selectedItem.variants.length" class="flex flex-col gap-5">
        <div
          v-for="(variant, index) in selectedItem.variants"
          :key="index"
          class="flex justify-between"
        >
          <div class="flex gap-3">
            <img :src="variant.image" class=" w-12" />
            <div>
              <div class="font-medium text-lg">
                {{ variant.name }}
              </div>
              <div v-if="variant.min_transaction" class="text-sm text-gray-400">
                Minimum Order of {{ variant.min_transaction }}
              </div>
              ₱{{ variant.price }}
            </div>
          </div>
          <div>
            <button
              class="rounded-xl font-medium bg-primary text-white py-2 px-6 "
              @click="
                () =>
                  (selectedItem = {
                    ...variant,
                    quantity: variant.min_transaction ?? 1,
                  })
              "
            >
              Select
            </button>
          </div>
        </div>
      </div>
      <div v-else>
        <img :src="selectedItem.image" />
        <div class="flex justify-between">
          <div class="flex">
            <div class="flex">
              <button
                class="rounded-l-xl font-medium bg-primary text-white py-1 px-3"
                @click="selectedItem.quantity--"
              >
                -
              </button>
              <input
                type="number"
                class="border px-2 w-[50px] text-center center"
                :min="selectedItem.min_transaction ?? 1"
                v-model="selectedItem.quantity"
              />
              <button
                class="rounded-r-xl font-medium bg-primary text-white py-1 px-3"
                @click="selectedItem.quantity++"
              >
                +
              </button>
            </div>
          </div>
          <button
            class="rounded-xl font-medium bg-primary text-white py-2 px-6"
            @click="
              cart.push({
                quantity: selectedItem.quantity ?? 1,
                item: selectedItem,
              }),
                (selectedItem = null)
            "
          >
            ₱{{ (selectedItem.price * selectedItem.quantity).toLocaleString() }}
            - Add to Basket
          </button>
        </div>
      </div>
    </template>
  </hb-modal>

  <div class="flex gap-10 flex-col pb-20 px-3">
    <div
      class="max-w-4xl grid lg:grid-cols-3 md:grid-cols-2 gap-y-20 mx-auto gap-2"
    >
      <product-card
        v-for="(item, index) in items"
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
import { ref } from "vue";
import HbModal from "../../components/HbModal.vue";
import ProductCard from "./Partials/ProductCard.vue";
import { ShoppingBagIcon } from "@heroicons/vue/24/outline";
import CartModal from "./Partials/CartModal.vue";
import { items as itemsJson } from "./Partials/items";

const items = itemsJson;

const selectedItem = ref(null);

const showCart = ref(false);

const cart = ref([]);

const handleDelete = (index) => {
  cart.value = cart.value.filter((item, i) => {
    return i != index;
  });
};
</script>
