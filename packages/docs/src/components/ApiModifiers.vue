<template>
  <p>
    <i18n>
      <template #ru>
        Булевые опции <code>center</code>, <code>self</code>
        и <code>noNested</code> можно указывать через модификаторы:
      </template>
      <template #en>
        Boolean options <code>center</code>, <code>self</code>
        and <code>noNested</code> can be specified via modifiers:
      </template>
    </i18n>
  </p>

  <v-code lang="html">
    {{ code }}
  </v-code>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useI18n } from "./I18n";

export default defineComponent({
  setup() {
    const { t } = useI18n({});

    return {
      code: computed(() => `
<div v-ripple.self />
<div v-ripple.center />
<div v-ripple.self.center />

<!-- ${t({ ru: 'Эти варианты идентичны', en: 'These cases are identical' }).value} -->
<div v-ripple="{ self: true }" />
<div v-ripple.self />

<!-- ${t({ ru: 'noNested преобразуется в kebab-case', en: 'noNested converts to kebab-case' }).value} -->
<div v-ripple="{ noNested: true }" />
<div v-ripple.no-nested />
      `)
    }
  }
})
</script>
