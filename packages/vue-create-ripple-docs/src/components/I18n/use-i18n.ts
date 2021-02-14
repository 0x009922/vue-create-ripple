import { inject, ComputedRef, computed } from "vue";
import { ProvideI18nSymbol, ProvideValue } from "./shared";

export interface UseI18N {
  <T extends Record<string, string>>(langs: Record<string, T>): {
    current: ComputedRef<Partial<T>>;
    t: {
      (map: Record<string, string>): ComputedRef<string | null>
    }
  } | never
}

const useI18n: UseI18N = (langs) => {
  const i18n = inject<ProvideValue>(ProvideI18nSymbol);

  if (!i18n) {
    throw new Error('i18n not provided. Make sure that you use it inside <i18n-container>');
  }

  return {
    current: computed(() => {
      if (i18n.lang) {
        return langs[i18n.lang] || {}
      }

      return {};
    }),
    t: (map) => computed(() => {
      return i18n.lang ? map[i18n.lang] : null;
    })
  }
}

export default useI18n;
