import { ref, watchEffect, Ref } from "vue";

export interface UseLocaleOptions {
  available: string[];
  default: string;
}

export interface UseLocaleReturn {
  lang: Ref<string>;
}

export default function useLocale(opts: UseLocaleOptions): UseLocaleReturn {
  const KEY = 'locale';
  const initial = localStorage.getItem(KEY);

  // Язык браузера ('en-US' -> 'en')
  const browser = navigator.language.slice(0, 2);

  const lang = ref<string>(initial ?? browser);
  
  watchEffect(() => {
    // Сброс только к доступным, режим mandatory
    if (!opts.available.includes(lang.value)) {
      lang.value = opts.default;
    }

    // Сохранение в localStorage
    localStorage.setItem(KEY, lang.value);
  });


  return { lang };
}