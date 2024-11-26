<template>
  <hb-modal :title="localSelectedItem.name">
    <template #content>
      <div v-if="localSelectedItem.variants.length" class="flex flex-col gap-5">
        <div
          v-for="(variant, index) in localSelectedItem.variants"
          :key="index"
          class="flex justify-between"
        >
          <div class="flex gap-3">
            <img :src="variant.image" class="w-12" />
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
              class="rounded-xl font-medium bg-primary text-white py-2 px-6"
              @click="
                () =>
                  (localSelectedItem = {
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
      <div v-else class="flex flex-col gap-3">
        <img :src="localSelectedItem.image" />
        <div
          v-if="localSelectedItem.modifiers.length"
          class="flex flex-col gap-5 mb-5"
        >
          <div
            v-for="(modifier, index) in localSelectedItem.modifiers"
            :key="index"
          >
            <div>
              <div class="font-medium mb-3">
                {{ modifier.name }}
              </div>
              <div class="flex flex-col gap-3">
                <button
                  v-for="(option, _index) in modifier.items"
                  class="text-left px-5 py-2 rounded-lg border flex justify-between"
                  :class="option.selected ? 'bg-gray-100' : ''"
                  @click="option.selected = !option.selected"
                  :key="_index"
                >
                  <div>
                    {{ option.name }}
                  </div>
                  <div class="text-gray-400">+₱{{ option.price }}</div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-between">
          <div class="flex">
            <div class="flex">
              <button
                class="rounded-l-xl font-medium bg-primary text-white py-1 px-3"
                @click="localSelectedItem.quantity--"
              >
                -
              </button>
              <input
                type="number"
                class="border px-2 w-[50px] text-center center"
                :min="localSelectedItem.min_transaction ?? 1"
                v-model="localSelectedItem.quantity"
              />
              <button
                class="rounded-r-xl font-medium bg-primary text-white py-1 px-3"
                @click="localSelectedItem.quantity++"
              >
                +
              </button>
            </div>
          </div>
          <button
            class="rounded-xl font-medium bg-primary text-white py-2 px-6"
            @click="handleAddToCart"
          >
            ₱{{ getProductTotal() }}
            - Add to Basket
          </button>
        </div>
      </div>
    </template>
  </hb-modal>
</template>

<script setup>
import { ref } from "vue";
import HbModal from "../../../components/HbModal.vue";

const props = defineProps({
  selectedItem: {
    type: Object,
    required: true,
  },
});

const localSelectedItem = ref({ ...props.selectedItem });

const emit = defineEmits(["addToCart"]);

const handleAddToCart = () => {
  emit("addToCart", {
    quantity: localSelectedItem.value.quantity ?? 1,
    item: localSelectedItem.value,
  });
};

const getProductTotal = () => {
  let total = localSelectedItem.value.quantity * localSelectedItem.value.price;

  localSelectedItem.value.modifiers.forEach((modifier) => {
    modifier.items.forEach((_item) => {
      if (_item.selected) {
        total += localSelectedItem.value.quantity * _item.price;
      }
    });
  });

  return total;
};
</script>
