<template>
  <v-code lang="ts" v-once>
    {{ OPTS }}
  </v-code>
</template>

<script lang="ts">
import { mdiOpenInNew } from '@mdi/js';
import { defineComponent } from "vue";
import OPTS from '../assets/ripple-options.txt?raw'

export default defineComponent({
  setup() {
    return {
      mdiOpenInNew,
      OPTS
    }
  }
})
</script>
