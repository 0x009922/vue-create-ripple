import { relativeMouseCoords, centerCoords, consoleWarn } from './tools';
import { RippleOptions, NormalizedRippleOptions, normalize } from './options';
import { createRipple, Ripple } from './create-ripple';

export interface BindedRipple {
  updateOptions: {
    (opts: RippleOptions): void;
  };
  unbind: {
    (): void;
  }
}

export interface CheckIsElementBinded {
  (el: HTMLElement): boolean;
}

function findRippledElement(
  el: HTMLElement,
  check: CheckIsElementBinded,
  calls = 0
): HTMLElement | null {
  if (calls > 1000) {
    consoleWarn('noNested alghorithm error - max calls stack size exceeded');
    return null;
  }

  if (check(el)) {
    return el;
  }

  const parent = el.parentElement;
  if (parent) {
    return findRippledElement(parent, check, calls + 1);
  }

  return null;
}

/**
 * Создание замыкания для работы с одним элементом
 */
export function bindElement(
  el: HTMLElement,
  checkIsBinded: CheckIsElementBinded,
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
      const rippled = findRippledElement(mousedownEvent.target as HTMLElement, checkIsBinded);
      if (rippled && rippled !== el) {
        return;
      }
    }

    let ripple: Ripple | null = createRipple(el, opts, ...resolveCoords(mousedownEvent));

    const onmouseup = () => {
      // clear all mousedown effects
      ripple?.hide();
      window.removeEventListener('mouseup', onmouseup);
      el.removeEventListener('mouseleave', onmouseleave);
      el.removeEventListener('mouseenter', onmouseenter);
    };

    const onmouseenter = (mouseenterEvent: MouseEvent) => {
      ripple = createRipple(el, opts, ...resolveCoords(mouseenterEvent));
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
    }
  };
}
