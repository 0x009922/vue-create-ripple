<template>
  <ul class="list-disc list-inside space-y-2">
    <template v-for="x in contents.registered">
      <contents-link :id="x.id">
        <component :is="x.render" />
      </contents-link>

      <ul
        v-if="x.children"
        class="list-circle list-inside ml-6 space-y-2"
      >
        <contents-link
          v-for="y in x.children"
          :id="y.id"
        >
          <component :is="y.render" />
        </contents-link>
      </ul>
    </template>
  </ul>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";
import useContents from "./use-contents";
import ContentsLink from './ContentsRendererLink.vue';
import { ProvideSymbol } from './shared';

export default defineComponent({
  components: {
    ContentsLink
  },
  setup() {
    const contents = inject<ReturnType<typeof useContents>>(ProvideSymbol)!;

    return { contents };
  }
})
</script>
