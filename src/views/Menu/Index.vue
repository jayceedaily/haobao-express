<template>
  <div class="flex w-full justify-end px-5">
    <button @click="showCart = true">
      <div class="relative w-12 h-12">
        <div
          class="absolute text-xs px-3 py-2 bg-primary shadow-md text-white rounded-full right-0 font-bold"
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

const items = [
  {
    name: "Boneless Fried Chicken",
    category: "Main Dish",
    image: "./items/compressed/6pc.png",
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
        image: "./items/compressed/4pc.png",

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
        image: "./items/compressed/6pc.png",

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
        image: "./items/compressed/8pc.png",

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
    image: "./items/compressed/charsiu.png",
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
    image: "./items/compressed/salt-and-pepper-pork.png",
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
    image: "./items/compressed/beef-brocolli.png",
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
    image: "./items/compressed/bokchoy.png",
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
    image: "./items/compressed/sweet-and-sour-pork.png",
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
    image: "./items/compressed/kangkong.png",
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
    image: "./items/compressed/shanghai.png",
    translation: {
      cn: "炸雞",
    },
    price: null,
    min_transaction: null,
    max_transaction: null,
    variants: [
      {
        name: "6PC Shanghai Roll",
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
        name: "18PC Shanghai Roll",
        category: "Main Dish",
        image: "./items/compressed/shanghai.png",
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

  {
    name: "Szechuan Pork",
    category: "Main Dish",
    image: "./items/compressed/szechuan-pork.png",
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
    image: "./items/compressed/shrimp-chao-fan.png",
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
    image: "./items/compressed/yangchow.png",
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
    image: "./items/compressed/pork-chao-fan.png",
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
    image: "./items/compressed/wonton-mami.png",
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
    image: "./items/compressed/braised-beef-mami.png",
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
    image: "./items/compressed/beef-wonton-mami.png",
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
    image: "./items/compressed/beef-mami.png",
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
    image: "./items/compressed/wonton-soup.png",
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
    image: "./items/compressed/congee.png",
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
        image: "./items/compressed/congee.png",

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
        image: "./items/compressed/congee.png",

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
    image: "./items/compressed/sharks-fin.png",
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
    image: "./items/compressed/siopao.png",
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
    image: "./items/compressed/dry-wonton.png",
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
    image: "./items/compressed/pork-bean-curd-roll.png",
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
    image: "./items/compressed/siomai.png",
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
    image: "./items/compressed/chicken-feet.png",
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

const showCart = ref(false);

const cart = ref([]);

const handleDelete = (index) => {
  console.log(index);

  cart.value = cart.value.filter((item, i) => {
    return i != index;
  });
};
</script>
