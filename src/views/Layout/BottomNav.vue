<template>
  <nav class="fixed bottom-0 z-10 w-full">
    <div class="bg-white shadow-lg flex h-20 relative w-full">
      <router-link
        :to="{ name: 'home' }"
        class="px-4 w-1/4 pt-5 text-gray-700 4s ease infinite"
        active-class=" border-primary border-t-[5px] pt-4"
      >
        <BuildingStorefrontIconSolid class="mx-auto w-6" />
      </router-link>
      <router-link
        :to="{ name: 'bag.index' }"
        class="px-4 w-1/4 pt-5 text-gray-500 4s ease infinite"
        active-class=" border-primary border-t-[5px] pt-4"
        
      >
        <!-- <span class="p-1 bg-red-500 text-xs text-white rounded-full w-5 h-5 mx-auto top-0 fixed z-10">4</span> -->
        <ShoppingBagIcon class="mx-auto w-6" />
      </router-link>
      <router-link
        :to="{ name: 'history.index' }"
        class="px-4 w-1/4 pt-5 text-gray-500 4s ease infinite"
        active-class=" border-primary border-t-[5px] pt-4"
      >
        <WalletIcon class="mx-auto w-6" />
      </router-link>

      <router-link
        :to="{ name: 'user.show' }"
        class="px-4 w-1/4 pt-5 text-gray-500 4s ease infinite"
        active-class=" border-primary border-t-[5px] pt-4"
      >
        <UserIcon class="mx-auto w-6" />
      </router-link>
    </div>
  </nav>
</template>

<script>
import {
  BuildingStorefrontIcon,
  ShoppingBagIcon,
  WalletIcon,
  UserIcon,
} from "@heroicons/vue/24/outline";
import { BuildingStorefrontIcon as BuildingStorefrontIconSolid } from "@heroicons/vue/24/solid";
export default {
  components: {
    BuildingStorefrontIcon,
    ShoppingBagIcon,
    WalletIcon,
    UserIcon,
    BuildingStorefrontIconSolid,
  },
};
</script>

<style></style>
