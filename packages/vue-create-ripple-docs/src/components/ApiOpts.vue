<template>
  <p>
    <v-a
      href="https://github.com/LiquidSolid/vue-create-ripple/blob/master/src/ripple-options.ts"
      target="_blank"
    >
      src/ripple-options.ts
      <v-icon
        :path="mdiOpenInNew"
        size="16"
        fill="currentColor"
      />
    </v-a>.
  </p>
</template>

<script lang="ts">
import { mdiOpenInNew } from '@mdi/js';
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {
      mdiOpenInNew
    }
  }
})
</script>
