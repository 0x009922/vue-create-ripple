<template>
  <p>
    <i18n>
      <template #ru>
        Сперва надо установить сам пакет:
      </template>
      <template #en>
        First you need to install the package itself:
      </template>
    </i18n>
  </p>

  <div class="grid gap-4 md:grid-cols-2">
    <div class="space-y-2">
      <span>npm</span>
      <v-code>
        npm install vue-create-ripple
      </v-code>
    </div>
    <div class="space-y-2">
      <span>yarn</span>
      <v-code>
        yarn add vue-create-ripple
      </v-code>
    </div>
  </div>

  <p>
    <i18n>
      <template #ru>
        Затем использовать утилиту <code>createRippleDirective</code>:
      </template>
      <template #en>
        Then use the <code>createRippleDirective</code> utility:
      </template>
    </i18n>
  </p>

  <v-code lang="js">
    {{ codeApp }}
  </v-code>

  <p>
    <i18n>
      <template #ru>
        Или использовать готовую директиву с параметрами по умолчанию:
      </template>
      <template #en>
        Or use a ready-made directive with default parameters:
      </template>
    </i18n>
  </p>

  <v-code lang="js">
    {{ codeComponent }}
  </v-code>

  <p>
    <i18n>
      <template #ru>
        Чтобы затем использовать в шаблоне:
      </template>
      <template #en>
        To then use in a template:
      </template>
    </i18n>
  </p>

  <v-code lang="html">
    {{ codeTemplate }}
  </v-code>
</template>

<script>
import { defineComponent, computed } from "vue";
import { useI18n } from './I18n'

export default defineComponent({
  setup() {
    const { t } = useI18n()

    return {
      codeApp: computed(() => `
// main
import { createApp } from 'vue';
import { createRippleDirective } from 'vue-create-ripple';

const app = createApp();

// ${
  t({
    ru: 'Можно указать все необходимые опции по умолчанию, см. API',
    en: 'All necessary options can be specified by default, see API'
  }).value
}
const opts = { class: 'my-ripple-class' };
app.directive('AppRipple', createRippleDirective(opts));
      `),
      codeComponent: `
// component
import { defineComponent } from 'vue';
import { Ripple } from 'vue-create-ripple';

export default defineComponent({
  directives: {
    LocalDefaultRipple: Ripple
  }
});
      `,
      codeTemplate: `
<div>
  <button v-local-default-ripple>
    Local
  </button>
  <button v-app-ripple>
    App
  </button>
</div>
      `
    }
  }
})
</script>
