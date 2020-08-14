const MARKED_ELEMENT_DATASET_KEY = 'vRippleMark';
const MARKED_ELEMENT_DATASET_VALUE = '';

export function markElement(el: HTMLElement): void {
  el.dataset[MARKED_ELEMENT_DATASET_KEY] = MARKED_ELEMENT_DATASET_VALUE;
}

export function unmarkElement(el: HTMLElement): void {
  delete el.dataset[MARKED_ELEMENT_DATASET_KEY];
}

export function isMarked(el: HTMLElement): boolean {
  return el.dataset[MARKED_ELEMENT_DATASET_KEY] === MARKED_ELEMENT_DATASET_VALUE;
}
