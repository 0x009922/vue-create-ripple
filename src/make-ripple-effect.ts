import { NormalizedRippleOptions } from './ripple-options';
import { computeRippleRadius, nextFrame, applyStyles } from './tools';

export interface Ripple {
  hide: {
    (): void;
  };
}

export interface MakeRippleEffect {
  (
    el: HTMLElement,
    options: NormalizedRippleOptions,
    x: number,
    y: number,
  ): Ripple;
}

function createContainer(opts: NormalizedRippleOptions): HTMLDivElement {
  const el = document.createElement('div');

  el.style.pointerEvents = 'none';
  el.style.position = 'absolute';
  el.style.overflow = 'hidden';
  el.style.borderRadius = 'inherit';
  el.style.transition = `opacity ${opts.disappearDuration} ${opts.disappearEasing}`;

  // Может быть так, что на контейнер распространятся правила margin/padding.
  // Поэтому отключаю экплицитно
  el.style.margin = '0';
  el.style.padding = '0';

  (
    [
      'left',
      'top',
      'right',
      'bottom'
    ] as (keyof Pick<CSSStyleDeclaration, 'left' | 'top' | 'right' | 'bottom'>)[]
  ).forEach((prop) => {
    el.style[prop] = '0';
  });

  applyStyles(el, opts.containerStyle || {});

  return el;
}

function createCircle(opts: NormalizedRippleOptions, radius: number): HTMLDivElement {
  const el = document.createElement('div');

  el.className = opts.class || '';

  el.style.borderRadius = '50%';
  el.style.transition = `transform ${opts.appearDuration} ${opts.appearEasing}`;
  el.style.transformOrigin = 'center center';
  el.style.transform = 'scale(0)';
  el.style.position = 'absolute';
  // eslint-disable-next-line no-multi-assign
  el.style.width = el.style.height = `${radius * 2}px`;

  applyStyles(el, opts.circleStyle || {});

  return el;
}

function setCirclePosition(el: HTMLElement, cx: number, cy: number, radius: number) {
  [el.style.left, el.style.top] = [cx - radius, cy - radius].map((x) => `${x}px`);
}

export const makeRippleEffect: MakeRippleEffect = (el, opts, x, y) => {
  const elRect = el.getBoundingClientRect();
  const radius = opts.radius || computeRippleRadius(elRect.width, elRect.height, x, y);
  const circle = createCircle(opts, radius);

  setCirclePosition(circle, x, y, radius);

  const container = createContainer(opts);
  container.appendChild(circle);
  el.appendChild(container);

  nextFrame(() => {
    circle.style.transform = 'scale(1)';
  });

  return {
    hide() {
      container.style.opacity = '0';
      container.addEventListener('transitionend', (ev) => {
        if (ev.target === container) {
          el.removeChild(container);
        }
      });
    }
  };
};
