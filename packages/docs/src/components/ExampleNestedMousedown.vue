<template>
  <div class="grid md:grid-cols-2 gap-4">
    <block>
      <block>
        <block>
          <block>
            <block />
          </block>
        </block>
      </block>
    </block>

    <v-code
      lang="html"
      class="min-w-0"
    >
      {{ code }}
    </v-code>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Block from './ExampleNestedMousedownBlock.vue';

export default defineComponent({
  components: { Block },
  setup: () => ({
    code: `
<div v-ripple>
  <div v-ripple @mousedown.stop>
    <div v-ripple @mousedown.stop>
      ...
    </div>
  </div>
</div>
    `
  })
})
</script>