import { mergeDefaults } from '../ripple-options';
import { makeRippleEffect } from '../make-ripple-effect';
import { computeRippleRadius } from '../tools';

// jest.mock('../tools');
// jest.mock('../tools', () => ({
//   computeRippleRadius: jest.fn(),
//   applyStyles
// }))

function createElem(): HTMLElement {
  return document.createElement('p');
}

function getContainer(root: HTMLElement): HTMLDivElement {
  return root.children[0] as HTMLDivElement;
}

function getCircle(root: HTMLElement): HTMLDivElement {
  return getContainer(root).children[0] as HTMLDivElement;
}

describe('Make ripple effect', () => {
  describe('Creation', () => {
    it('Passing default opts to container and circle', () => {
      const el = createElem();
      makeRippleEffect(el, mergeDefaults({}), 0, 0);
      expect(getComputedStyle(el.children[0] as HTMLDivElement)).toMatchSnapshot();
    });

    it('Passing styles to container', () => {
      const el = createElem();
      makeRippleEffect(el, mergeDefaults({
        containerStyle: {
          alignContent: 'center',
          transitionProperty: 'background',
          color: 'red'
        }
      }), 0, 0);
      expect(getComputedStyle(el.children[0] as HTMLDivElement)).toMatchSnapshot();
    });

    it('Passing default opts to circle', () => {
      const el = createElem();
      makeRippleEffect(el, mergeDefaults({}), 0, 0);
      const circle = el.children[0].children[0] as HTMLDivElement;
      expect(getComputedStyle(circle)).toMatchSnapshot();
    });

    it('Passing styles to circle', () => {
      const el = createElem();
      makeRippleEffect(el, mergeDefaults({
        circleStyle: {
          border: '1px solid black',
          transition: 'all .4s linear',
          borderRadius: '5px',
          opacity: '0'
        }
      }), 0, 0);

      const circle = el.children[0].children[0] as HTMLDivElement;
      expect(getComputedStyle(circle)).toMatchSnapshot();
    });

    it('Using computeRippleRadius() when radius is null', () => {
      const el = createElem();
      const RECT = {
        width: 500,
        height: 234
      } as DOMRect;
      const [X, Y] = [123, 500];
      jest.spyOn(el, 'getBoundingClientRect').mockImplementation(() => RECT);
      const radius = computeRippleRadius(RECT.width, RECT.height, X, Y);

      makeRippleEffect(el, mergeDefaults(), X, Y);

      // expect(computeRippleRadius as jest.Mock).lastCalledWith(RECT.width, RECT.height, X, Y);
      const circle = getCircle(el);
      const val = `${radius * 2}px`;
      const { width, height } = circle.style;
      expect(width).toEqual(val);
      expect(height).toEqual(val);
    });

    it('Set radius when it is not null', () => {
      const el = createElem();
      const RADIUS = 4123;

      makeRippleEffect(el, mergeDefaults({
        radius: RADIUS
      }), 0, 0);

      const circle = el.children[0].children[0] as HTMLDivElement;
      const val = `${RADIUS * 2}px`;
      const { width, height } = circle.style;
      expect(val).toEqual(width);
      expect(val).toEqual(height);
    });

    // it('Setting transform in nextFrame()', () => {
    //   const el = createElem();
    //   let callback: (() => void) | null = null;
    //   (nextFrame as jest.Mock).mockImplementation((cb) => {
    //     callback = cb;
    //     return new Promise(() => 0);
    //   });

    //   makeRippleEffect(el, mergeDefaults(), 0, 0);

    //   const circle = getCircle(el);
    //   expect(circle.style.transform).toEqual('scale(0)');
    //   expect(callback).not.toBeNull();
    //   callback!();
    //   expect(circle.style.transform).toEqual('scale(1)');
    // });
  });

  describe('Hiding', () => {
    // it('Setting container opacity to 0');

    // it('Not removing container before its transitionend');

    // it('Not removing container after circle transitionend');

    // it('Removing container after its own transitionend');
  });
});
