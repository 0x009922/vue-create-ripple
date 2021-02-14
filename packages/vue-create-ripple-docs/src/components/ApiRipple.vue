<template>
  <p>
    <i18n>
      <template #ru>
        Также в пакете доступна уже готовая директива со значениями по умолчанию.
        Это просто short-hand для <code>createRippleDirective()</code>:
      </template>
      <template #en>
        A ready-made directive with default values is also available in the package.
        It's just a short-hand for <code>createRippleDirective()</code>:
      </template>
    </i18n>
  </p>

  <v-code lang="js">
    {{ code }}
  </v-code>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useI18n } from "./I18n";

const codeGen = (comment: unknown) => `
import { defineComponent } from 'vue';
import { Ripple, createRippleDirective } from 'vue-create-ripple';

const Component = defineComponent({
  directives: {
    // ${comment}
    Ripple,
    AnotherRipple: createRippleDirective()
  }
});
`

export default defineComponent({
  setup() {
    const { current } = useI18n({
      ru: {
        comment: 'По параметрам по умолчанию это две одинаковые директивы'
      },
      en: {
        comment: 'In terms of default options, these are two identical directives'
      }
    });

    return {
      code: computed(() => codeGen(current.value.comment))
    }
  }
})
</script>
