export interface NormalizedRippleOptions {
  disappearEasing: string;
  disappearDuration: string;
  appearEasing: string;
  appearDuration: string;
  class?: string;
  disabled: boolean;
  center: boolean;
  self: boolean;
  noNested: boolean;
  containerStyle?: Partial<CSSStyleDeclaration>;
  circleStyle?: Partial<CSSStyleDeclaration>;
  // Абсолютное значение радиуса
  radius: number | null;
}

export type RippleOptions = Partial<NormalizedRippleOptions>;

// const defaults: NormalizedRippleOptions = {
//   disappearEasing: 'cubic-bezier(0.4, 0, 0.2, 1)',
//   disappearDuration: '.7s',
//   appearEasing: 'cubic-bezier(0.16, 1, 0.3, 1)',
//   appearDuration: '.8s',
//   class: null,
//   disabled: false,
//   center: false,
//   self: false,
//   noNested: true
// }

// function getDefaultValue<K extends keyof NormalizedRippleOptions, V extends NormalizedRippleOptions[K]>(
//   key: K,
//   value?: V | null
// ) {

// }

export function normalize(opts?: RippleOptions): NormalizedRippleOptions {
  return {
    disappearEasing: opts?.disappearEasing ?? 'cubic-bezier(0.4, 0, 0.2, 1)',
    disappearDuration: opts?.disappearDuration ?? '.7s',
    appearEasing: opts?.appearEasing ?? 'cubic-bezier(0.16, 1, 0.3, 1)',
    appearDuration: opts?.appearDuration ?? '.8s',
    class: opts?.class,
    disabled: opts?.disabled ?? false,
    center: opts?.center ?? false,
    self: opts?.self ?? false,
    noNested: opts?.noNested ?? true,
    containerStyle: opts?.containerStyle,
    circleStyle: opts?.circleStyle,
    radius: opts?.radius || null
  };
}
