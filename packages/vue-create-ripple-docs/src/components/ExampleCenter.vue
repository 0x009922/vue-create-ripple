<template>
  <div class="space-y-4">
    <div class="grid md:grid-cols-3 gap-4">
      <but v-local-ripple>
        {{ lang.without }}
      </but>

      <but v-local-ripple="{ center: true }">
        {{ lang.flag }}
      </but>

      <but v-local-ripple.center>
        {{ lang.modifier }}
      </but>
    </div>

    <v-code lang="html">
      {{ code }}
    </v-code>
  </div>
</template>

<script lang="ts">
import { defineComponent, FunctionalComponent, h, mergeProps, computed } from "vue";
import { createRippleDirective } from "vue-create-ripple";
import { useI18n } from "./I18n";

const But: FunctionalComponent = (props, { slots, attrs }) => {
  return h('div', mergeProps(attrs, {
    class: 'rounded bg-orange-200 text-orange-600 cursor-pointer select-none p-3 text-center'
  }), slots)
}

const LocalRipple = createRippleDirective({
  class: 'bg-orange-600 opacity-50'
})

export default defineComponent({
  directives: {
    LocalRipple,
  },
  components: {
    But
  },
  setup() {
    const { current: lang } = useI18n({
      ru: {
        without: 'Кнопка без центрирования',
        flag: 'Центрирование через флаг',
        modifier: 'Или через модификатор'
      },
      en: {
        without: 'No centering',
        flag: 'Via flag',
        modifier: 'Via modifier'
      }
    });

    return {
      lang,
      code: computed(() => `
<div v-ripple>
  ${lang.value.without}
</div>

<div v-ripple="{ center: true }">
  ${lang.value.flag}
</div>

<div v-ripple.center>
  ${lang.value.modifier}
</div>
      `)
    };
  },
})
</script>
