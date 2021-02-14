import {
  Directive, DirectiveBinding
} from 'vue';
import { RippleOptions } from './ripple-options';
import { BindedRipple, bindRippleEffect } from './bind-ripple-effect';

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
  defaults?: RippleOptions | null
): RippleDirective {
  const bindedRipples: WeakMap<HTMLElement, BindedRipple> = new WeakMap();

  return {
    mounted(el, binding) {
      const opts = extractRippleOptions(binding);
      const mergedOpts = mergeOptions(defaults, opts);
      const ripple = bindRippleEffect(el, mergedOpts);
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
