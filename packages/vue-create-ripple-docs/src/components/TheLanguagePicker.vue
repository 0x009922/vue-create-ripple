<template>
  <div class="fixed right-0 top-0 p-4 select-none z-10">
    <select
      v-model="model"
      class="p-1 uppercase elevation-2 rounded bg-white"
    >
      <option
        v-for="op in options"
        :value="op"
      >
        {{ op }}
      </option>
    </select> 
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from "vue";

export default defineComponent({
  props: {
    value: {
      type: String,
      default: null
    },
    options: {
      type: Array as PropType<string[]>,
      required: true
    }
  },
  emits: ['update:value'],
  setup(props, { emit }) {
    return {
      model: computed({
        get: () => props.value,
        set: (v: string) => emit('update:value', v)
      })
    }
  }
})
</script>
