<template>
  <nav class="sticky bottom-0 z-10">
    <div class="bg-white shadow-lg flex h-20">
      <div class="px-4 w-1/4 pt-5 text-gray-700 border-primary border-t-[5px]">
        <BuildingStorefrontIconSolid class="mx-auto w-6" />
      </div>
      <div class="px-4 w-1/4 pt-5 text-gray-500 relative">
	  <!-- <span class="p-1 bg-red-500 text-xs text-white rounded-full w-5 h-5 mx-auto top-0 fixed z-10">4</span> -->
        <ShoppingBagIcon class="mx-auto w-6" />
      </div>
      <div class="px-4 w-1/4 pt-5 text-gray-500">
        <WalletIcon class="mx-auto w-6" />
      </div>

      <div class="px-4 w-1/4 pt-5 text-gray-500">
        <UserIcon class="mx-auto w-6" />
      </div>
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
