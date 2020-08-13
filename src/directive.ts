import {
  Directive, DirectiveBinding
} from 'vue';
import { RippleOptions } from './options';
import { BindedRipple, CheckIsElementBinded, bindElement } from './bind-element';

export type RippleDirective = Directive<HTMLElement, RippleOptions | null | undefined>;

/**
 * Слияние дефолтных опций c предоставленными
 */
function mergeOptions(
  defaults?: RippleOptions | null,
  opts?: RippleOptions | null
): RippleOptions {
  return {
    ...defaults,
    ...opts
  };
}

/**
 * Извлечение опций из привязки. Слияние модификаторов и объекта опций.
 */
function extractRippleOptions(
  binding: DirectiveBinding<RippleOptions | null | undefined>
): RippleOptions {
  // const { self, center, 'no-nested': noNested } = binding.modifiers;
  return {
    ...binding.value,
    self: binding.modifiers.self ?? binding.value?.self,
    center: binding.modifiers.center ?? binding.value?.center,
    noNested: binding.modifiers['no-nested'] ?? binding.value?.noNested
  };
}

export function createDirective(
  defaults?: RippleOptions | null | undefined
): RippleDirective {
  const bindedRipples: WeakMap<HTMLElement, BindedRipple> = new WeakMap();

  const checkIsElementBinded: CheckIsElementBinded = (el) => bindedRipples.has(el);

  return {
    mounted(el, binding) {
      const opts = extractRippleOptions(binding);
      const mergedOpts = mergeOptions(defaults, opts);
      const ripple = bindElement(el, checkIsElementBinded, mergedOpts);
      bindedRipples.set(el, ripple);
    },
    beforeUpdate(el, binding) {
      const ripple = bindedRipples.get(el);
      if (ripple) {
        const opts = extractRippleOptions(binding);
        const mergedOpts = mergeOptions(defaults, opts);
        ripple.updateOptions(mergedOpts);
      }
    },
    unmounted(el) {
      const ripple = bindedRipples.get(el);
      if (ripple) {
        bindedRipples.delete(el);
        ripple.unbind();
      }
    }
  };
}
