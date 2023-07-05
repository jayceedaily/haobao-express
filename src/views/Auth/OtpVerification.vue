<template>
  <div class="pt-10">
    <div
      class="px-5 py-10 container md:shadow-lg md:rounded-md md:border-1 md:border"
    >
      <form @submit.prevent="handleLogin" class="h-full sm:h-auto">
        <div class="mb-10 text-center">
          <h1 class="font-bold mb-3 text-4xl">
            Please enter<br />
            your code
          </h1>

          <p class="text-gray-400">Start ordering after entering your number</p>
        </div>

        <div class="flex flex-col gap-3">
          <input
            v-model="form.otp"
            input
            type="tel"
            pattern="[0-9]*"
            inputmode="numeric"
            name="mobile"
            id="mobile"
            class="border-yellow-400 font-medium border-b-4 text-center text-5xl"
            maxlength="6"
            max="6"
            placeholder="******"
          />

          <p class="text-gray-400 text-xs mb-10">
            By continuing, you agree to the collection, processing of personal
            data and the user agreement
          </p>

          <div
            class="fixed bottom-5 inset-x-0 pb-2 sm:pb-5 w-full mx-auto px-5 sm:static sm:p-0"
          >
            <button
              @click="handleSubmit"
              type="submit"
              class="font-medium bg-primary px-3 py-2 rounded-lg w-full h-14 text-xl"
            >
              Create Account
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
import { watch } from "@vue/runtime-core";
import { useRouter } from "vue-router";

const form = ref({
  otp: null,
});

const otp = ref([]);

const router = useRouter();

const handleSubmit = () => {
  router.replace({
    to: "otp-verification",
  });
};

const handleLogin = () => {
  console.log(form.value);
};
</script>

<style></style>
