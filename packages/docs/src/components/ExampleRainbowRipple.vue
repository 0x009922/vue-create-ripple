<template>
  <div class="space-y-4">
    <div
      v-ripple-purple
      v-ripple-indigo
      v-ripple-blue
      v-ripple-green
      v-ripple-yellow
      v-ripple-orange
      v-ripple-red
      class="elevation-2 rounded flex items-center justify-center p-8 select-none cursor-pointer"
    >
      {{ lang.wannaRainbow }}
    </div>

    <div class="grid md:grid-cols-5 gap-4">
      <v-code
        lang="js"
        class="md:col-span-3 min-w-0"
      >
        {{ code.js }}
      </v-code>

      <v-code
        lang="html"
        class="md:col-span-2 min-w-0"
      >
        {{ code.html }}
      </v-code>
    </div>
  </div>
</template>

<script lang="ts">
import { createRippleDirective } from 'vue-create-ripple';
import { defineComponent, Directive, computed } from 'vue';
import { useI18n } from './I18n';

const colors = [
  'purple',
  'indigo',
  'blue',
  'green',
  'yellow',
  'orange',
  'red'
];

const directives = colors.reduce(
  (prev, color, i) => {
    prev[`ripple-${color}`] = createRippleDirective({
      appearDuration: `${0.8 + i * 0.3}s`,
      disappearDuration: `${0.3 + i * 0.1}s`,
      class: `bg-${color}-500`
    });

    return prev;
  },
  {} as Record<string, Directive>
);

const jsCode = () => `
const colors = [
  'purple',
  'indigo',
  'blue',
  'green',
  'yellow',
  'orange',
  'red'
];

const directives = colors.reduce(
  (prev, color, i) => {
    prev[\`ripple-\${color}\`] = createRippleDirective({
      appearDuration: \`\${0.8 + i * 0.3}s\`,
      disappearDuration: \`\${0.3 + i * 0.1}s\`,
      class: \`bg-\${color}-500\`
    });

    return prev;
  },
  {}
);

export default defineComponent({
  directives
});
`;

const htmlCode = (wanna: unknown) => `
<div
  v-ripple-purple
  v-ripple-indigo
  v-ripple-blue
  v-ripple-green
  v-ripple-yellow
  v-ripple-orange
  v-ripple-red
>
  ${wanna}
</div>
`

export default defineComponent({
  directives,
  setup() {
    const { current: lang } = useI18n({
      ru: {
        wannaRainbow: 'Хочу радугу!'
      },
      en: {
        wannaRainbow: 'I wanna rainbow!'
      }
    });

    return {
      lang,
      code: computed(() => ({
        js: jsCode(),
        html: htmlCode(lang.value.wannaRainbow)
      }))
    }
  }
})

</script>