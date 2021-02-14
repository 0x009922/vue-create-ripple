<template>
  <div class="space-y-4">
    <div class="grid gap-4 md:grid-cols-2">
      <block
        v-ripple="{
          appearDuration: '10s',
          disappearDuration: '5s',
        }"
      >
        {{ lang.slow }}
      </block>
      <v-code
        lang="html"
        class="min-w-0"
      >
        {{ code.slow }}
      </v-code>
    </div>

    <div class="grid gap-4 md:grid-cols-2">
      <block
        v-ripple="{
          appearDuration: '.4s',
          disappearDuration: '.2s',
        }"
      >
        {{ lang.fast }}
      </block>
      <v-code
        lang="html"
        class="min-w-0"
      >
        {{ code.fast }}
      </v-code>
    </div>

    <div class="grid gap-4 md:grid-cols-2">
      <block
        v-ripple="{
          appearEasing: 'steps(7)',
          disappearDuration: '1.5s',
        }"
      >
        {{ lang.epileptic }}
      </block>
      <v-code
        lang="html"
        class="min-w-0"
      >
        {{ code.epileptic }}
      </v-code>
    </div>

    <div class="grid gap-4 md:grid-cols-3">
      <block
        v-ripple="{
          appearEasing: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
          appearDuration: '.3s',
          disappearEasing: 'cubic-bezier(0, 0.55, 0.45, 1)',
          disappearDuration: '.8s',
          radius: 56,
        }"
      >
        {{ lang.elastic }}
      </block>

      <v-code
        lang="html"
        class="md:col-span-2 max-w-full min-w-0"
      >
        {{ code.elastic }}
      </v-code>
    </div>
  </div>
</template>

<script lang="ts">
import { h, mergeProps, defineComponent, computed } from "vue";
import { createRippleDirective } from "vue-create-ripple";
import { useI18n } from "./I18n";

export default defineComponent({
  directives: {
    Ripple: createRippleDirective({ class: "bg-indigo-600 opacity-25" })
  },
  components: {
    // ESlow,
    Block: (props, { slots, attrs }) =>
      h(
        "div",
        mergeProps(attrs, {
          class: "p-8 text-center flex items-center justify-center cursor-pointer select-none rounded bg-indigo-200 text-indigo-600",
        }),
        slots
      ),
  },
  setup() {
    const { current: lang } = useI18n({
      ru: {
        slow: 'Ме-е-ед-ле-н-но-о-о-о..',
        fast: 'Быстр-р-ро!',
        epileptic: 'Будто бы глючно',
        elastic: 'Эластично',
      },
      en: {
        slow: 'Slo-o-o-o-ow...',
        fast: 'Blazing fast!',
        epileptic: 'Glitch-like',
        elastic: 'Elastic',
      }
    });

    return {
      lang,
      code: computed(() => {
        return {
          slow: `
<div
  v-ripple="{
    appearDuration: '10s',
    disappearDuration: '5s',
  }"
>
  ${lang.value.slow}
</div>
          `,
          fast: `
<div
  v-ripple="{
    appearDuration: '.3s',
    disappearDuration: '.2s',
  }"
>
  ${lang.value.fast}
</div>
          `,
          epileptic: `
<div
  v-ripple="{
    appearEasing: 'steps(7)',
    disappearDuration: '1.5s',
  }"
>
  ${lang.value.epileptic}
</div>
          `,
          elastic: `
<div
  v-ripple="{
    appearEasing: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    appearDuration: '.3s',
    disappearEasing: 'cubic-bezier(0, 0.55, 0.45, 1)',
    disappearDuration: '.8s',
    radius: 56,
  }"
>
  ${lang.value.elastic}
</div>
          `
        }
      }),
    };
  },
});
</script>
