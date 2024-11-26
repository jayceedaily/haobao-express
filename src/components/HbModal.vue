<template>
  <div
    class="relative z-20"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <!--
	Background backdrop, show/hide based on modal state.
  
	Entering: "ease-out duration-300"
	  From: "opacity-0"
	  To: "opacity-100"
	Leaving: "ease-in duration-200"
	  From: "opacity-100"
	  To: "opacity-0"
  -->
    <div
      @click="handleBlur"
      class="fixed inset-0 bg-gray-500 bg-opacity-50 transition-opacity"
    ></div>

    <div class="fixed z-10 inset-0 overflow-y-auto">
      <div
        class="flex items-center sm:items-start justify-center min-h-full p-4 text-center"
      >
        <!--
		Modal panel, show/hide based on modal state.
  
		Entering: "ease-out duration-300"
		  From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
		  To: "opacity-100 translate-y-0 sm:scale-100"
		Leaving: "ease-in duration-200"
		  From: "opacity-100 translate-y-0 sm:scale-100"
		  To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
	  -->
        <div
          class="relative bg-white overflow-visible dark:bg-gray-900 rounded-lg text-left shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full"
        >
          <div class="flex justify-between px-5 pt-4">
            <div>
              <p v-if="title" class="font-medium text-xl mb-3 dark:text-white">
                {{ title }}
              </p>
              <slot name="title"></slot>
            </div>
            <div v-if="showClose">
              <button @click="$emit('close')">
                <XCircleIcon class="w-6 h-6 opacity-30 dark:text-gray-500" />
              </button>
            </div>
          </div>
          <div
            class="bg-white dark:bg-gray-900 overflow-visible rounded-b-lg"
            :class="noPadding ? '' : 'px-5 pb-5'"
          >
            <slot name="content" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { XCircleIcon } from "@heroicons/vue/24/solid";

export default {
  components: {
    XCircleIcon,
  },
  props: {
    closeOnBlur: {
      type: Boolean,
      value: true,
    },
    title: {
      type: String,
    },
    showClose: {
      type: Boolean,
      default: true,
    },
    noPadding: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["close"],
  setup(props, { emit }) {
    const handleBlur = () => {
      if (props.closeOnBlur) {
        emit("close");
      }
    };

    return {
      handleBlur,
    };
  },
};
</script>

<style></style>
