import { markElement, isMarked, unmarkElement } from '../ripple-mark';

function createElement(): HTMLElement {
  return document.createElement('b');
}

describe('Ripple mark on element', () => {
  it('Without anysing element is unmarked', () => {
    const el = createElement();
    expect(isMarked(el)).toBe(false);
  });

  it('Mark -> isMark = true', () => {
    const el = createElement();

    markElement(el);

    expect(isMarked(el)).toBe(true);
  });

  it('Mark & unmark -> isMark = false', () => {
    const el = createElement();

    markElement(el);
    unmarkElement(el);

    expect(isMarked(el)).toBe(false);
  });
});
