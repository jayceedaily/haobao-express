<template>
  {{ cart.length }}
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
          <div>
            <div class="font-medium text-lg">
              {{ variant.name }}
            </div>
            <div v-if="variant.min_transaction" class="text-sm text-gray-400">
              Minimum Order of {{ variant.min_transaction }}
            </div>
            ₱{{ variant.price }}
          </div>
          <div>
            <button
              class="rounded-xl font-medium bg-primary text-white py-2 px-6"
              @click="
                () =>
                  (selectedItem = {
                    ...variant,
                    quantity: variant.min_transaction ?? 1,
                  })
              "
            >
              Add to Basket
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
                :min="selectedItem.min_transaction || 1"
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
            ₱{{
              (selectedItem.price * selectedItem.quantity).toLocaleString()
            }}
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

const items = [
  {
    name: "Boneless Fried Chicken",
    category: "Main Dish",
    image: "src/assets/items/6pc.png",
    translation: {
      cn: "炸雞",
    },
    price: null,
    min_transaction: null,
    max_transaction: null,
    variants: [
      {
        name: "4PC Boneless Fried Chicken",
        category: "Main Dish",
        translation: {
          cn: "炸雞",
        },
        price: 378,
        variants: [],
        min_transaction: null,
        max_transaction: null,
      },
      {
        name: "6PC Boneless Fried Chicken",
        category: "Main Dish",
        translation: {
          cn: "炸雞",
        },
        price: 548,
        variants: [],
        min_transaction: null,
        max_transaction: null,
      },
      {
        name: "Boneless Fried Chicken Bulk",
        category: "Main Dish",
        translation: {
          cn: "炸雞",
        },
        price: 88,
        variants: [],
        min_transaction: 8,
        max_transaction: null,
      },
    ],
  },
  {
    name: "Char Siu (Pork Asado)",
    category: "Main Dish",
    image: "src/assets/items/charsiu.png",
    translation: {
      cn: "炸雞",
    },
    price: 298,
    min_transaction: null,
    max_transaction: null,
    variants: [],
  },
  {
    name: "Salt & Pepper Pork",
    category: "Main Dish",
    image: "src/assets/items/salt-and-pepper-pork.png",
    translation: {
      cn: "炸雞",
    },
    price: 298,
    min_transaction: null,
    max_transaction: null,
    variants: [],
  },
  {
    name: "Beef Brocolli",
    category: "Main Dish",
    image: "src/assets/items/beef-brocolli.png",
    translation: {
      cn: "炸雞",
    },
    price: 318,
    min_transaction: null,
    max_transaction: null,
    variants: [],
  },
  {
    name: "Stir-Fried Bok Choy",
    category: "Main Dish",
    image: "src/assets/items/bokchoy.png",
    translation: {
      cn: "炸雞",
    },
    price: 148,
    min_transaction: null,
    max_transaction: null,
    variants: [],
  },
  {
    name: "Sweet & Sour Pork",
    category: "Main Dish",
    image: "src/assets/items/sweet-and-sour-pork.png",
    translation: {
      cn: "炸雞",
    },
    price: null,
    min_transaction: null,
    max_transaction: null,
    variants: [
      {
        name: "Sharing",
        category: "Main Dish",
        translation: {
          cn: "炸雞",
        },
        price: 188,
        variants: [],
        min_transaction: null,
        max_transaction: null,
      },
      {
        name: "Platter",
        category: "Main Dish",
        translation: {
          cn: "炸雞",
        },
        price: 338,
        variants: [],
        min_transaction: null,
        max_transaction: null,
      },
    ],
  },
  {
    name: "Soy Garlic Kangkong",
    category: "Main Dish",
    image: "src/assets/items/kangkong.png",
    translation: {
      cn: "炸雞",
    },
    price: 98,
    min_transaction: null,
    max_transaction: null,
    variants: [],
  },
  {
    name: "Shanghai Roll",
    category: "Main Dish",
    image: "src/assets/items/shanghai.png",
    translation: {
      cn: "炸雞",
    },
    price: null,
    min_transaction: null,
    max_transaction: null,
    variants: [
      {
        name: "6PC",
        category: "Main Dish",
        translation: {
          cn: "炸雞",
        },
        price: 98,
        variants: [],
        min_transaction: null,
        max_transaction: null,
      },
      {
        name: "18PC",
        category: "Main Dish",
        translation: {
          cn: "炸雞",
        },
        price: 268,
        variants: [],
        min_transaction: null,
        max_transaction: null,
      },
    ],
  },

  {
    name: "Szechuan Pork",
    category: "Main Dish",
    image: "src/assets/items/szechuan-pork.png",
    translation: {
      cn: "炸雞",
    },
    price: null,
    min_transaction: null,
    max_transaction: null,
    variants: [
      {
        name: "Sharing",
        category: "Main Dish",
        translation: {
          cn: "炸雞",
        },
        price: 188,
        variants: [],
        min_transaction: null,
        max_transaction: null,
      },
      {
        name: "Platter",
        category: "Main Dish",
        translation: {
          cn: "炸雞",
        },
        price: 338,
        variants: [],
        min_transaction: null,
        max_transaction: null,
      },
    ],
  },

  {
    name: "Shrimp Chao Fan",
    category: "Fried Rice",
    image: "src/assets/items/shrimp-chao-fan.png",
    translation: {
      cn: "炸雞",
    },
    price: null,
    min_transaction: null,
    max_transaction: null,
    variants: [
      {
        name: "Solo",
        category: "Fried Rice",
        translation: {
          cn: "炸雞",
        },
        price: 138,
        variants: [],
        min_transaction: null,
        max_transaction: null,
      },
      {
        name: "Platter",
        category: "Fried Rice",
        translation: {
          cn: "炸雞",
        },
        price: 348,
        variants: [],
        min_transaction: null,
        max_transaction: null,
      },
    ],
  },

  {
    name: "Yang Chow",
    category: "Fried Rice",
    image: "src/assets/items/yangchow.png",
    translation: {
      cn: "炸雞",
    },
    price: null,
    min_transaction: null,
    max_transaction: null,
    variants: [
      {
        name: "Solo",
        category: "Fried Rice",
        translation: {
          cn: "炸雞",
        },
        price: 128,
        variants: [],
        min_transaction: null,
        max_transaction: null,
      },
      {
        name: "Platter",
        category: "Fried Rice",
        translation: {
          cn: "炸雞",
        },
        price: 318,
        variants: [],
        min_transaction: null,
        max_transaction: null,
      },
    ],
  },

  {
    name: "Pork Chao Fan",
    category: "Fried Rice",
    image: "src/assets/items/pork-chao-fan.png",
    translation: {
      cn: "炸雞",
    },
    price: null,
    min_transaction: null,
    max_transaction: null,
    variants: [
      {
        name: "Solo",
        category: "Fried Rice",
        translation: {
          cn: "炸雞",
        },
        price: 108,
        variants: [],
        min_transaction: null,
        max_transaction: null,
      },
      {
        name: "Platter",
        category: "Fried Rice",
        translation: {
          cn: "炸雞",
        },
        price: 278,
        variants: [],
        min_transaction: null,
        max_transaction: null,
      },
    ],
  },

  // PANCIT

  {
    name: "Wonton Mami",
    category: "Noodle Soup",
    image: "src/assets/items/wonton-mami.png",
    translation: {
      cn: "炸雞",
    },
    price: 178,
    min_transaction: null,
    max_transaction: null,
    variants: [],
  },
  {
    name: "Taiwanese Braised Beef Mami",
    category: "Noodle Soup",
    image: "src/assets/items/braised-beef-mami.png",
    translation: {
      cn: "炸雞",
    },
    price: 198,
    min_transaction: null,
    max_transaction: null,
    variants: [],
  },
  {
    name: "Beef Wonton Mami",
    category: "Noodle Soup",
    image: "src/assets/items/beef-wonton-mami.png",
    translation: {
      cn: "炸雞",
    },
    price: 248,
    min_transaction: null,
    max_transaction: null,
    variants: [],
  },
  {
    name: "Beef Mami",
    category: "Noodle Soup",
    image: "src/assets/items/beef-mami.png",
    translation: {
      cn: "炸雞",
    },
    price: 178,
    min_transaction: null,
    max_transaction: null,
    variants: [],
  },
  {
    name: "Wonton Soup",
    category: "Noodle Soup",
    image: "src/assets/items/wonton-soup.png",
    translation: {
      cn: "炸雞",
    },
    price: 178,
    min_transaction: null,
    max_transaction: null,
    variants: [],
  },
  {
    name: "Century Egg Congee",
    category: "Noodle Soup",
    image: "src/assets/items/congee.png",
    translation: {
      cn: "炸雞",
    },
    price: null,
    min_transaction: null,
    max_transaction: null,
    variants: [
      {
        name: "Pork",
        category: "Noodle Soup",
        translation: {
          cn: "炸雞",
        },
        price: 178,
        variants: [],
        min_transaction: null,
        max_transaction: null,
      },
      {
        name: "Beef",
        category: "Noodle Soup",
        translation: {
          cn: "炸雞",
        },
        price: 198,
        variants: [],
        min_transaction: null,
        max_transaction: null,
      },
    ],
  },

  {
    name: "Sharks Fin",
    category: "Dimsum",
    image: "src/assets/items/sharks-fin.png",
    translation: {
      cn: "炸雞",
    },
    price: 148,
    min_transaction: null,
    max_transaction: null,
    variants: [],
  },
  {
    name: "Siopao",
    category: "Dimsum",
    image: "src/assets/items/siopao.png",
    translation: {
      cn: "炸雞",
    },
    min_transaction: null,
    max_transaction: null,
    variants: [
      {
        name: "Asado",
        category: "Noodle Soup",
        translation: {
          cn: "炸雞",
        },
        price: 78,
        variants: [],
        min_transaction: null,
        max_transaction: null,
      },
      {
        name: "Bola-Bola",
        category: "Noodle Soup",
        translation: {
          cn: "炸雞",
        },
        price: 78,
        variants: [],
        min_transaction: null,
        max_transaction: null,
      },
    ],
  },
  {
    name: "Dry Wonton",
    category: "Dimsum",
    image: "src/assets/items/dry-wonton.png",
    translation: {
      cn: "炸雞",
    },
    price: 98,
    min_transaction: null,
    max_transaction: null,
    variants: [],
  },
  {
    name: "Pork Bean Curd Roll",
    category: "Dimsum",
    image: "src/assets/items/pork-bean-curd-roll.png",
    translation: {
      cn: "炸雞",
    },
    price: 148,
    min_transaction: null,
    max_transaction: null,
    variants: [],
  },
  {
    name: "Pork Shumai",
    category: "Dimsum",
    image: "src/assets/items/siomai.png",
    translation: {
      cn: "炸雞",
    },
    price: 98,
    min_transaction: null,
    max_transaction: null,
    variants: [],
  },
  {
    name: "Chicken Feet",
    category: "Dimsum",
    image: "src/assets/items/chicken-feet.png",
    translation: {
      cn: "炸雞",
    },
    price: 148,
    min_transaction: null,
    max_transaction: null,
    variants: [],
  },
];

const selectedItem = ref(null);

const cart = ref([]);
</script>
