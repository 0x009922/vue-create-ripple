<template>
  <h2 :class="textClass">
    <a :id="actualId" />
    <slot />
  </h2>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed, inject, ref } from "vue";
import useContents from "./use-contents";
import { ProvideSymbol } from './shared';

export default defineComponent({
  props: {
    id: {
      type: String,
      default: null,
    },
    level2: {
      type: Boolean,
      default: false,
    },
    ignore: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { slots }) {
    const contents = inject<ReturnType<typeof useContents>>(ProvideSymbol)!;
    const actualId = ref<string>(props.id);

    onMounted(() => {
      // registerHeader(props.id, props.text)
      if (!props.ignore) {
        actualId.value = contents.register(props.id!, props.level2, slots.default!);
        // console.log('reg...', props);
      }
    });

    const textClass = computed(() => {
      if (props.level2) {
        return 'text-xl  md:text-2xl'
      }

      return 'text-2xl md:text-3xl'
    });

    return {
      textClass,
      actualId
    }
  }
})
</script>