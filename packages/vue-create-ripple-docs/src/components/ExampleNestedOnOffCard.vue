<template>
  <div
    v-ripple="{
      class: 'bg-green-500 opacity-25',
      appearDuration: '1.5s',
      noNested
    }"
    class="border border-green-300 rounded p-4 space-y-4 cursor-pointer select-none"
  >
    <div class="text-xl text-green-600">
      <slot />
    </div>

    <div class="flex space-x-4">
      <template v-for="i in 3">
        <div
          v-ripple="{
            class: 'bg-green-500 opacity-50'
          }"
          class="rounded-full bg-green-200 text-green-700 p-2 w-10 h-10 flex items-center justify-center cursor-pointer select-none"
        >
          {{ i }}
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    noNested: {
      type: Boolean,
      default: false
    }
  }
})
</script>
