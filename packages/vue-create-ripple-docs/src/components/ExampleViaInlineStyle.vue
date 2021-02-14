<template>
  <div class="grid md:grid-cols-2 gap-4">
    <div
      v-ripple="{
        circleStyle: {
          border: '10px dotted blue'
        },
        radius: 50
      }"
      class="bg-blue-200 p-16 text-blue-600 flex items-center justify-center cursor-pointer select-none rounded"
    >
      {{ currentLang.click }}
    </div>

    <v-code lang="html">
      {{ code }}
    </v-code>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue';
import { useI18n } from './I18n';

export default {
  setup() {
    const { current } = useI18n({
      ru: {
        click: 'Жмякни'
      },
      en: {
        click: 'Click'
      }
    });

    const code = computed(() =>  `
<div
  v-ripple="{
    circleStyle: {
      border: '10px dotted blue'
    },
    radius: 50
  }"
>
  ${current.value.click}
</div>
    `)

    return {
      code,
      currentLang: current
    }
  }
}
</script>
