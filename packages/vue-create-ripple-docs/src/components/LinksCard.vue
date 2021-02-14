<template>
  <a
    class="block"
    :href="to"
    target="_blank"
  >
    <div
      v-ripple="{ class: 'bg-black opacity-25' }"
      v-bind="$attrs"
      class="elevation-2 active:elevation-8 rounded cursor-pointer select-none transition-all duration-200 ease-md-standard"
    >
      <slot />
    </div>
  </a>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  inheritAttrs: false,
  props: {
    to: {
      type: String,
      default: null
    }
  }
})
</script>
