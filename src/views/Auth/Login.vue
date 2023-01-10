<template>
  <div class="pt-10">
    <div
      class="px-5 py-10 container mx-auto md:w-1/2 lg:w-1/3 w-full md:shadow-lg md:rounded-md md:border-1 md:border "
    >
      <form @submit.prevent="handleLogin">
        <div class="mb-10 text-center">
          <h1 class="font-bold mb-3 text-4xl">
            Enter your<br />
            mobile number
          </h1>

          <p class="text-gray-400">Start ordering after entering your number</p>
        </div>

        <div class="flex flex-col gap-3">
          <div class="flex">
            <div
              class="border bordder-gray-400 px-3 py-2 rounded-lg border-r-0 rounded-r-none bg-gray-100 font-medium"
            >
              +63
            </div>
            <input
              v-model="form.mobile"
              type="text"
              name="mobile"
              id="mobile"
              class="border bordder-gray-400 px-3 py-2 rounded-lg w-full border-l-0 rounded-l-none font-medium"
            />
          </div>

          <p class="text-gray-400 text-xs mb-10">
            By continuing, you agree to the collection, processing of personal
            data and the user agreement
          </p>

          <div>
            <button
              type="submit"
              class="font-medium bg-primary px-3 py-2 rounded-lg w-full"
            >
              Next
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import subtitle from "@/components/Subtitle.vue";

const form = ref({
  mobile: null,
});

const handleLogin = () => {
  console.log(form.value);
};
</script>

<style></style>
