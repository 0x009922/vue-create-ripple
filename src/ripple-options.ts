export interface NormalizedRippleOptions {
  /**
   * Тайминг-функция исчезновения ripple.
   * По умолчанию 'cubic-bezier(0.4, 0, 0.2, 1)'
   */
  disappearEasing: string;
  /**
   * Длительность исчезновения ripple.
   * По умолчанию '.7s'
   */
  disappearDuration: string;
  /**
   * Тайминг-функция увеличения круга.
   * По умолчанию 'cubic-bezier(0.16, 1, 0.3, 1)'
   */
  appearEasing: string;
  /**
   * Длительность увеличения круга.
   * По умолчанию '.8s'
   */
  appearDuration: string;
  /**
   * Класс, который будет задан кругу. Можно использовать
   * для быстрой и простой стилизации.
   *
   * ! Если не будет указан, то ничего не будет видно
   */
  class?: string | null;
  /**
   * Если `true`, то эффект не будет срабатывать
   */
  disabled: boolean;
  /**
   * Если `true`, то эффект всегда будет исходить из центра элемента.
   */
  center: boolean;
  /**
   * Если `true`, то эффект сработает только при событии
   * `mousedown` на самом элементе, а не его потомках
   */
  self: boolean;
  /**
   * Если `true`, то эффект при клике на дочернем элементе не сработает,
   * если в дереве его родителей найдётся элемент с привязанной к нему
   * директивой и этот элемент является дочерним к текущему. По умолчанию
   * `true`, так что нужно явно указать `false` для отключения эффекта
   */
  noNested: boolean;
  /**
   * Объект для передачи стиля контейнеру напрямую.
   */
  containerStyle?: Partial<CSSStyleDeclaration>;
  /**
   * Объект для передачи стиля круга напрямую.
   */
  circleStyle?: Partial<CSSStyleDeclaration>;
  /**
   * Абсолютное значение максимального радиуса круга (в пикселях).
   * По умолчанию круг растягивается настолько, чтобы полностью покрыть весь
   * элемент.
   */
  radius: number | null;
}

export type RippleOptions = Partial<NormalizedRippleOptions>;

const defaults: NormalizedRippleOptions = {
  disappearEasing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  disappearDuration: '.7s',
  appearEasing: 'cubic-bezier(0.16, 1, 0.3, 1)',
  appearDuration: '.8s',
  class: null,
  disabled: false,
  center: false,
  self: false,
  noNested: true,
  radius: null
};

export function mergeDefaults(opts?: RippleOptions): NormalizedRippleOptions {
  return { ...defaults, ...opts };
}
