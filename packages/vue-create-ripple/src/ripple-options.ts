import { SetRequired } from 'type-fest';

export interface RippleOptions {
  /**
   * Effect disappearence timing function
   *
   * @default 'cubic-bezier(0.4, 0, 0.2, 1)'
   */
  disappearEasing?: string;

  /**
   * Effect disappearence duration
   *
   * @default '.7s'
   */
  disappearDuration?: string;

  /**
   * Effect appearence timing function
   *
   * @default 'cubic-bezier(0.16, 1, 0.3, 1)'
   */
  appearEasing?: string;

  /**
   * Effect appearence duration
   *
   * @default '.8s'
   */
  appearDuration?: string;

  /**
   * The class to be assigned to the circle. Can be used
   * for quick and easy styling.
   *
   * ! If not specified, then nothing will be visible
   */
  class?: string | null;

  /**
   * Flag to disable effect triggering
   */
  disabled?: boolean;

  /**
   * If `true`, the effect will always come from the center of the element.
   *
   * @default false
   */
  center?: boolean;

  /**
   * If `true`, then the effect will work only on event
   * `mousedown` on the element itself, not its descendants
   *
   * @default false
   */
  self?: boolean;

  /**
   * If `true`, then the effect when clicking on the child element will not work,
   * if in the tree of its parents there is an element bound to it
   * directive and this element is a child of the current one. Default
   * `true`, so you need to explicitly specify `false` to disable this option
   *
   * @default true
   */
  noNested?: boolean;

  /**
   * Additional css styles for the container
   */
  containerStyle?: Partial<CSSStyleDeclaration>;

  /**
   * Additional css styles for the ripple
   */
  circleStyle?: Partial<CSSStyleDeclaration>;

  /**
   * The absolute value of the maximum radius of the circle (in pixels).
   * By default, the circle is stretched enough to completely cover the entire
   * element.
   *
   * `null` means to stretch
   */
  radius?: number | null;
}

export type NormalizedRippleOptions = SetRequired<
  RippleOptions,
  | 'appearDuration'
  | 'appearEasing'
  | 'center'
  | 'disabled'
  | 'disappearDuration'
  | 'disappearEasing'
  | 'noNested'
  | 'radius'
  | 'self'
>;

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
