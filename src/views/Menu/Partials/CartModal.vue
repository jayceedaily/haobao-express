<template>
  <hb-modal title="My Cart" no-padding>
    <template #content>
      <div class="flex flex-col gap-5">
        <div
          v-for="(item, index) in cart"
          :key="index"
          class="flex justify-between py-2 px-3"
          :class="item.quantity == 0 ? 'bg-gray-100' : ''"
        >
          <div class="flex gap-5">
            <img :src="item.item.image" class="w-24" />
            <div :class="item.quantity == 0 ? 'line-through' : ''">
              {{ item.item.name }}
              <div>₱{{ item.item.price }}</div>
            </div>
          </div>
          <div v-if="item.quantity == 0">
            <div class="flex gap-3 h-full">
              <button
                class="px-3 py-1 bg-gray-200 text-gray-500 rounded-lg font-medium h-full"
                @click="item.quantity++"
              >
                <XMarkIcon class="w-4 h-4" />
              </button>
              <button
                class="px-3 py-1 bg-red-100 text-red-500 rounded-lg font-medium h-full"
                @click="handleDelete(index)"
              >
                <TrashIcon class="w-4 h-4" />
              </button>
            </div>
          </div>
          <div v-else class="flex flex-col items-center">
            <div class="flex gap-2">
              <button
                class="bg-gray-200 px-2 rounded-full"
                @click="item.quantity--"
              >
                <MinusIcon class="h-3 w-3" />
              </button>
              {{ item.quantity }}
              <button
                class="bg-gray-200 px-2 rounded-full"
                @click="item.quantity++"
              >
                <PlusIcon class="h-3 w-3" />
              </button>
            </div>
            <div class="text-gray-400">
              ₱{{ (item.item.price * item.quantity).toLocaleString() }}
            </div>
          </div>
        </div>
      </div>
      <hr class="my-5" />
	  <div class="px-5 pb-5">

		  <div v-if="cart.length == 0">Your Cart is Empty</div>
		  <div v-else class="flex flex-col gap-3">
			<div class="flex justify-between">
			  <div class="font-medium">Delivery</div>
			  FREE
			</div>
			<div class="flex justify-between">
			  <div class="font-medium">Total</div>
	
			  ₱{{ cartTotal.toLocaleString() }}
			</div>

			<button
            class="bg-primary text-white font-medium px-5 py-3 rounded-lg"
          >
            Checkout
          </button>
		  </div>
	  </div>
    </template>

  </hb-modal>
</template>

<script setup>
import { computed } from "vue";
import HbModal from "../../../components/HbModal.vue";
import { MinusIcon, PlusIcon } from "@heroicons/vue/24/outline";
import { TrashIcon, XMarkIcon } from "@heroicons/vue/24/solid";

const props = defineProps({
  cart: {
    type: Array,
  },
});

const emit = defineEmits(["delete"]);

const cartTotal = computed(() => {
  let total = 0;

  props.cart.forEach((item) => {
    total += item.quantity * item.item.price;
  });

  return total;
});

const handleDelete = (index) => {
  emit("delete", index);
};
</script>

<style></style>
