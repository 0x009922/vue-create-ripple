<script lang="ts">
import { FunctionalComponent, inject, VNode } from "vue";
import { ProvideI18nSymbol, ProvideValue } from './shared';

function renderAlert(message: string): VNode | string {
  return `/ ALERT / ${message}`;
}

const I18n: FunctionalComponent = (props, { slots }) => {
  const i18n = inject<ProvideValue>(ProvideI18nSymbol);

  if (!i18n) {
    return renderAlert('I18n injection not found. Are you use <i18n> inside <i18n-container> ?')
  }

  // Если язык null, то вывожу сообщение специальное
  if (!i18n.lang) {
    return renderAlert('Language not specified');
  }

  // Если языка нет в слотах
  if (!(i18n.lang in slots)) {
    return renderAlert(`Lang is "${i18n.lang}", slot for it not found`);
  }

  // Всё ок
  return slots[i18n.lang]!();
}

export default I18n;
</script>