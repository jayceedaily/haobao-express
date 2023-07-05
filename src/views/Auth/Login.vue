<template>
  <div class="pt-10">
    <div
      class="px-5 py-10 container md:shadow-lg md:rounded-md md:border-1 md:border"
    >
      <form @submit.prevent="handleSubmit" class="h-full sm:h-auto">
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
              input
              type="tel"
              pattern="[0-9]*"
              inputmode="numeric"
              name="mobile"
              id="mobile"
              class="border bordder-gray-400 px-3 py-2 rounded-lg w-full border-l-0 rounded-l-none font-medium"
              maxlength="12"
              max="12"
            />
          </div>
          <span
            v-if="errors.mobile"
            class="bg-red-100 text-red-700 px-5 py-5 rounded-lg"
          >
            {{ errors.mobile[0] }}
          </span>

          <p class="text-gray-400 text-xs mb-10">
            By continuing, you agree to the collection, processing of personal
            data and the user agreement
          </p>

          <div
            class="fixed bottom-5 inset-x-0 pb-2 sm:pb-5 w-full mx-auto px-5 sm:static sm:p-0"
          >
            <button
              type="submit"
              class="font-medium bg-primary px-3 py-2 rounded-lg w-full h-14 text-xl"
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
import { watch } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import { login } from "@/api/auth";

const form = ref({
  mobile: null,
});

const errors = ref({});

const router = useRouter();

watch(
  () => form.value.mobile,
  (value) => {
    // if (value.length === 3) {
    //   form.value.mobile = value + "-";
    // }
    // if (value.length === 8) {
    //   form.value.mobile = value + "-";
    // }
  }
);

const handleSubmit = () => {
  // console.log("handleSubmit");

  // router.push({
  //   name: "otp-verification",
  // });

  errors.value = {};

  login(form.value)
    .then((response) => {
      router.push({
        name: "otp-verification",
        query: {
          mobile: form.value.mobile,
        },
      });
    })
    .catch((error) => {
      console.log(error.response.data.errors);
      if (error.response.status === 422) {
        errors.value = error.response.data.errors;
      }

      if (error.response.status === 404) {
        console.log("red");
      }
    });
};

// const handleLogin = () => {
//   console.log(form.value);
// };
</script>

<style></style>
