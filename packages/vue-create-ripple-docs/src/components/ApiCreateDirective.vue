<template>
  <p>
    <i18n>
      <template #ru>
        Основной инструмент пакета, который создаёт Ripple-директиву
        с какими-то параметрами по умолчанию. Эти параметры можно потом будет перезаписать при
        самом использовании созданной директиве.
      </template>
      <template #en>
        The main tool of the package that creates a Ripple directive with some default parameters.
        These parameters can then be overwritten when using the created directive.
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

const codeGen = (
  app: unknown,
  comp: unknown,
  ps: unknown
) => `
import { createApp, defineComponent } from 'vue';
import { createRippleDirective } from 'vue-create-ripple';

// ${app}
createApp()
  .directive('ripple', createRippleDirective({
    class: 'black-ripple'
  }));

// ${comp}
const Component = defineComponent({
  directives: {
    CenterRipple: createRippleDirective({
      center: true
    })
  }
})

// ${ps}`;

export default defineComponent({
  setup() {
    const { current } = useI18n({
      ru: {
        app: 'Можно установить глобально в приложении',
        comp: 'Можно установить локально в компоненте',
        ps: 'Подробнее об объекте опций см. ниже'
      },
      en: {
        app: 'Can be installed globally in the application',
        comp: 'Can be installed locally in a component',
        ps: 'See below for more on the options object'
      }
    });

    return {
      code: computed(() => codeGen(
        current.value.app,
        current.value.comp,
        current.value.ps
      ))
    }
  }
})
</script>
