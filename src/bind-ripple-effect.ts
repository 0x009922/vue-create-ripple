import { relativeMouseCoords, centerCoords, consoleWarn } from './tools';
import { RippleOptions, NormalizedRippleOptions, normalize } from './ripple-options';
import { makeRippleEffect, Ripple } from './make-ripple-effect';
import { markElement, unmarkElement, isMarked } from './ripple-mark';

export interface BindedRipple {
  updateOptions: {
    (opts: RippleOptions): void;
  };
  unbind: {
    (): void;
  }
}

function findRippledElement(
  el: HTMLElement,
  calls = 0
): HTMLElement | null {
  if (calls > 1000) {
    consoleWarn('noNested alghorithm error - max calls stack size exceeded');
    return null;
  }

  if (isMarked(el)) {
    return el;
  }

  const parent = el.parentElement;
  if (parent) {
    return findRippledElement(parent, calls + 1);
  }

  return null;
}

/**
 * Создание замыкания для работы с одним элементом
 */
export function bindRippleEffect(
  el: HTMLElement,
  initialOpts?: RippleOptions
): BindedRipple {
  let opts: NormalizedRippleOptions = normalize(initialOpts);

  /**
   * Функция для определения, где стартовать риппл
   */
  const resolveCoords: {
    (ev: { clientX: number, clientY: number }): [number, number];
  } = (ev) => {
    // Если center, то по центру
    if (opts.center) {
      return centerCoords(el);
    }

    // Там, где клик
    return relativeMouseCoords(el, ev);
  };

  const onmousedown = (mousedownEvent: MouseEvent) => {
    // Если disabled, то игнорирую
    if (opts.disabled) {
      return;
    }

    // Если self, то проверяю
    if (opts.self && mousedownEvent.target !== el) {
      return;
    }

    // Если noNested, то проверяю
    if (mousedownEvent.target && mousedownEvent.target !== el) {
      // Проверяю каждый элемент вверх по дереву
      // на привязку к нему директивы
      const rippled = findRippledElement(mousedownEvent.target as HTMLElement);
      if (rippled && rippled !== el) {
        return;
      }
    }

    let ripple: Ripple | null = makeRippleEffect(el, opts, ...resolveCoords(mousedownEvent));

    const onmouseup = () => {
      // clear all mousedown effects
      ripple?.hide();
      window.removeEventListener('mouseup', onmouseup);
      el.removeEventListener('mouseleave', onmouseleave);
      el.removeEventListener('mouseenter', onmouseenter);
    };

    const onmouseenter = (mouseenterEvent: MouseEvent) => {
      ripple = makeRippleEffect(el, opts, ...resolveCoords(mouseenterEvent));
    };

    const onmouseleave = () => {
      if (ripple) {
        ripple.hide();
        ripple = null;
      }
    };

    window.addEventListener('mouseup', onmouseup);
    el.addEventListener('mouseleave', onmouseleave);
    el.addEventListener('mouseenter', onmouseenter);
  };

  // Помечаю, что под рипплом
  markElement(el);

  if (getComputedStyle(el).position === 'static') {
    el.style.position = 'relative';
  }

  el.addEventListener('mousedown', onmousedown);

  return {
    updateOptions(v) {
      opts = normalize(v);
    },
    unbind() {
      el.removeEventListener('mousedown', onmousedown);
      // Снимаю пометку
      unmarkElement(el);
    }
  };
}
