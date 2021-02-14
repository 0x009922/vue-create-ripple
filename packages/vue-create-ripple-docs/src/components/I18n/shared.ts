export const ProvideI18nSymbol = Symbol('i18n');

export interface ProvideValue {
  lang: string | null;
}
