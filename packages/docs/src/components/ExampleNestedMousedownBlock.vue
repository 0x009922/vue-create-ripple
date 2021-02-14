<template>
  <div
    v-ripple="{
      class: 'bg-green-500 opacity-25',
    }"
    class="border border-green-300 p-4 rounded-full h-full relative cursor-pointer"
    @mousedown.stop
  >
    <slot />
  </div>
</template>