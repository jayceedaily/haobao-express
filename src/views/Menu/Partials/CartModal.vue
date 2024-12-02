<template>
  <hb-modal title="My Cart" no-padding>
    <template #content>
      <div class="flex flex-col gap-5">
        <table class="mb-5">
          <tr
            v-for="(item, index) in cart"
            :key="index"
            class="border-b"
            :class="item.quantity == 0 ? 'bg-gray-100' : ''"
          >
            <td class="w-20 py-5 px-5 align-top">
              <span
                class="inline text-primary font-medium px-2 py-1 rounded-lg border-2 border-primary"
              >
                ×{{ item.quantity }}
              </span>
            </td>
            <td class="py-2">
              <div :class="item.quantity == 0 ? 'line-through' : ''">
                <span class="text-lg">
                  {{ item.item.name }}
                </span>
                <div class="text-lg">₱{{ item.item.price }}</div>
                <div
                  v-for="(modifier, index) in item.item.modifiers"
                  :key="index"
                >
                  <div
                    v-for="(modifierItem, index) in modifier.items"
                    :key="index"
                  >
                    <div v-if="modifierItem.selected" class="text-gray-400">
                      +₱{{ modifierItem.price }} {{ modifierItem.name }}
                    </div>
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div v-if="item.quantity == 0">
                <div class="flex gap-3 h-full">
                  <button
                    class="px-3 py-1 bg-gray-200 text-gray-500 rounded-lg font-medium h-full"
                    @click="item.quantity++"
                  >
                    <ArrowLeftIcon class="w-4 h-4" />
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
                <!-- <div>
                  <input type="range" v-model="item.quantity"/>
                </div> -->
                <div class="flex gap-2">
                  <button class="text-emerald-700 font-medium" @click="handleEdit(index, item)">EDIT</button>
                  <!-- <button
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
                  </button> -->
                </div>
                <div class="text-gray-400">
                  ₱{{ getProductTotal(item).toLocaleString() }}
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>

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
import { TrashIcon, ArrowLeftIcon } from "@heroicons/vue/24/solid";

const props = defineProps({
  cart: {
    type: Array,
  },
});

const emit = defineEmits(["delete", "edit"]);

const cartTotal = computed(() => {
  let total = 0;

  props.cart.forEach((item) => {
    total += getProductTotal(item);
  });

  return total;
});

const getProductTotal = (product) => {
  let total = product.quantity * product.item.price;

  product.item.modifiers.forEach((modifier) => {
    modifier.items.forEach((_item) => {
      if (_item.selected) {
        total += product.quantity * _item.price;
      }
    });
  });

  return total;
};

const handleDelete = (index) => {
  emit("delete", index);
};

const handleEdit = (index, item) => {
  emit("edit", { index, item });
};
</script>

<style></style>
