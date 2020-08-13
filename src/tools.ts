/**
 * Расчёт конечного радиуса круга исходя из размеров
 * окна, где он будет, и месте клика мыши в окне
 *
 * @param width Ширина окна
 * @param height Высота окна
 * @param x X мыши
 * @param y Y мыши
 * @return Радиус
 */
export function computeRippleRadius(
  width: number,
  height: number,
  x: number,
  y: number
): number {
  const w = x > width / 2 ? x : width - x;
  const h = y > height / 2 ? y : height - y;
  return (w ** 2 + h ** 2) ** 0.5;
}

/**
 * Ожидание следующего фрема прорисовки
 * @param callback
 */
export function nextFrame(callback?: () => void): Promise<void> {
  return new Promise((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        resolve();

        if (callback) {
          callback();
        }
      });
    });
  });
}

/**
 * Расчёт координат мыши относительно элемента
 * @param el
 * @param e
 */
export function relativeMouseCoords(
  el: HTMLElement,
  e: {
    clientX: number;
    clientY: number;
  }
): [number, number] {
  const rect = el.getBoundingClientRect();
  return [e.clientX - rect.x, e.clientY - rect.y];
}

/**
 * Координаты центра элемента
 * @param el
 */
export function centerCoords(el: HTMLElement): [number, number] {
  const rect = el.getBoundingClientRect();
  return [rect.width / 2, rect.height / 2];
}

/**
 * Предупреждение в консоль с префиском `[Ripple]`
 * @param args
 */
export function consoleWarn(...args: unknown[]): void {
  // eslint-disable-next-line no-console
  console.warn('[Ripple]', ...args);
}

/**
 * Применение стилей к элементу
 */
export function applyStyles(el: HTMLElement, data: Partial<CSSStyleDeclaration>): void {
  const entries = Object.entries(data) as [
    keyof CSSStyleDeclaration,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    any
  ];

  entries.forEach(([key, value]) => {
    el.style[key] = value;
  });
}
