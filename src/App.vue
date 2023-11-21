<template>
  <div class="mb-5">
    <div class="w-full bg-[#ed2027] py-5 text-white hidden sm:block">
      <nav class="mx-auto lg:w-2/3 md:w-3/4 xl:w-1/3 flex">
        <img
          src="@/assets/haobao-logo-square-optimized.jpg"
          alt=""
          class="w-16 mr-5"
        />
        <ol class="flex gap-5 items-center text-lg font-medium">
          <li>
            <router-link :to="{ name: 'home' }"> Menu </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'location' }"> Location </router-link>
          </li>
        </ol>
      </nav>
    </div>

    <div class="w-full bg-[#ed2027] py-5 text-white block sm:hidden">
      <nav class="mx-auto lg:w-2/3 md:w-3/4 xl:w-1/3 flex px-3">
        <img
          src="@/assets/haobao-logo-square-optimized.jpg"
          alt=""
          class="w-16 mr-5"
        />
      </nav>
    </div>
  </div>
  <router-view />
</template>

<script></script>
