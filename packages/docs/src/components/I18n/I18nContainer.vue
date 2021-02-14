<script lang="ts">
import { defineComponent, computed, provide, readonly, reactive } from "vue";
import { ProvideI18nSymbol, ProvideValue } from './shared';

export default defineComponent({
  props: {
    lang: {
      type: String,
      default: null
    }
  },
  setup(props, { slots }) {
    // const providedLanguage = computed<string | null>(() => props.lang);
    const provideValue = reactive({
      lang: computed<string | null>(() => props.lang)
    })
    provide<ProvideValue>(ProvideI18nSymbol, readonly(provideValue));

    return () => slots.default && slots.default();
  }
})
</script>