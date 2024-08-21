<template>
  <div class="flex gap-10 flex-col pb-20 px-3">
    <div
      class="mx-w-3xl grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-y-20 mx-auto gap-2"
    >
      <div class="">
        <div class="relative">
          <div
            class="absolute right-10 text-primary text-xs border-primary border-2 font-bold px-2 rounded-full"
          >
            BEST SELLER
          </div>
          <img src="@/assets/items/6pc.png" class="h-[200px]" alt="" />
        </div>
        <div class="text-center flex flex-col gap-2">
          <div>
            <div class="font-bold text-xl">Boneless Chicken</div>
            <div class="text-primary">炸雞</div>
          </div>
          <div class="flex gap-3 justify-center">
            <div class="flex gap-1 items-center">
              <div
                class="px-2 border-primary rounded-lg font-medium border-2 text-primary text-sm"
              >
                4PC
              </div>
              <div class="font-medium text-lg">₱379</div>
            </div>
            <div class="flex gap-1 items-center">
              <div
                class="px-2 border-blue-400 rounded-lg font-medium border-2 text-blue-500 text-sm"
              >
                6PC
              </div>
              <div class="font-medium">₱549</div>
            </div>
          </div>
          <div>
            <button
              class="rounded-full text-bold bg-primary text-white py-3 px-9"
            >
              Add to Basket
            </button>
          </div>
        </div>
      </div>

      <div class="">
        <div>
          <img
            src="@/assets/items/beef-brocolli.png"
            class="h-[200px] mx-auto"
            alt=""
          />
        </div>
        <div class="text-center flex flex-col gap-2">
          <div>
            <div class="font-bold text-xl">Beef Broccoli</div>
            <div class="text-primary">牛肉西蘭花</div>
          </div>
          <div class="flex gap-3 justify-center">
            <div class="flex gap-1 items-center">
              <div class="font-medium">₱399</div>
            </div>
          </div>
          <div>
            <button
              class="rounded-full text-bold bg-primary text-white py-3 px-9"
            >
              Add to Basket
            </button>
          </div>
        </div>
      </div>

      <div class="">
        <img
          src="@/assets/items/bokchoy.png"
          class="h-[200px] mx-auto"
          alt=""
        />
        <div class="text-center flex flex-col gap-2">
          <div>
            <div class="font-bold text-xl">Stir-Fried Bokchoy</div>
            <div class="text-primary">炒小白菜</div>
          </div>
          <div class="flex gap-3 justify-center">
            <div class="flex gap-1 items-center">
              <div class="font-medium">₱199</div>
            </div>
          </div>
          <div>
            <button
              class="rounded-full text-bold bg-primary text-white py-3 px-9"
            >
              Add to Basket
            </button>
          </div>
        </div>
      </div>

      <div class="">
        <img
          src="@/assets/items/szechuan-pork.png"
          class="h-[200px] mx-auto"
          alt=""
        />
        <div class="text-center flex flex-col gap-2">
          <div>
            <div class="font-bold text-xl">Szechuan Fried Pork</div>
            <div class="text-primary">牛肉西蘭花</div>
          </div>
          <div class="flex gap-3 justify-center">
            <div class="flex gap-1 items-center">
              <div
                class="px-3 bg-primary rounded-lg font-medium text-white text-xs uppercase py-1"
              >
                S
              </div>
              <div class="font-medium">₱199</div>
            </div>
            <div class="flex gap-1 items-center">
              <div
                class="px-3 bg-blue-500 rounded-lg font-medium text-white text-xs uppercase py-1"
              >
                P
              </div>
              <div class="font-medium">₱369</div>
            </div>
          </div>
          <div>
            <button
              class="rounded-full text-bold bg-primary text-white py-3 px-9"
            >
              Add to Basket
            </button>
          </div>
        </div>
      </div>

      <div class="">
        <img
          src="@/assets/items/kangkong.png"
          class="h-[200px] mx-auto"
          alt=""
        />
        <div class="text-center flex flex-col gap-2">
          <div>
            <div class="font-bold text-xl">Soy Garlic Kangkong</div>
            <div class="text-primary">炒小白菜</div>
          </div>
          <div class="flex gap-3 justify-center">
            <div class="flex gap-1 items-center">
              <div class="font-medium">₱199</div>
            </div>
          </div>
          <div>
            <button
              class="rounded-full text-bold bg-primary text-white py-3 px-9"
            >
              Add to Basket
            </button>
          </div>
        </div>
      </div>

      <div class="">
		<div class="relative">
			<div
            class="absolute right-10 text-primary text-xs border-primary border-2 font-bold px-2 rounded-full"
          >
            BEST SELLER
          </div>
		  <img
          src="@/assets/items/shanghai.png"
          class="h-[200px] mx-auto"
          alt=""
        />
		</div>
   
        <div class="text-center flex flex-col gap-2">
          <div>
            <div class="font-bold text-xl">Shanghai Rolls</div>
            <div class="text-primary">炒小白菜</div>
          </div>

          <div class="flex gap-3 justify-center">
            <div class="flex gap-1 items-center">
              <div
                class="px-3 bg-primary rounded-lg font-medium text-white text-xs uppercase py-1"
              >
                6PC
              </div>
              <div class="font-medium">₱99</div>
            </div>
            <div class="flex gap-1 items-center">
              <div
                class="px-3 bg-blue-500 rounded-lg font-medium text-white text-xs uppercase py-1"
              >
                18PC
              </div>
              <div class="font-medium">₱279</div>
            </div>
          </div>

          <div>
            <button
              class="rounded-full text-bold bg-primary text-white py-3 px-9"
            >
              Add to Basket
            </button>
          </div>
        </div>
      </div>

      <div class="">
        <img
          src="@/assets/items/sweet-and-sour-pork.png"
          class="h-[200px] mx-auto"
          alt=""
        />
        <div class="text-center flex flex-col gap-2">
          <div>
            <div class="font-bold text-xl">Sweet & Sour Fried Pork</div>
            <div class="text-primary">炒小白菜</div>
          </div>

          <div class="flex gap-3 justify-center">
            <div class="flex gap-1 items-center">
              <div
                class="px-3 bg-primary rounded-lg font-medium text-white text-xs uppercase py-1"
              >
                S
              </div>
              <div class="font-medium">₱199</div>
            </div>
            <div class="flex gap-1 items-center">
              <div
                class="px-3 bg-blue-500 rounded-lg font-medium text-white text-xs uppercase py-1"
              >
                P
              </div>
              <div class="font-medium">₱369</div>
            </div>
          </div>

          <div>
            <button
              class="rounded-full text-bold bg-primary text-white py-3 px-9"
            >
              Add to Basket
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style></style>
