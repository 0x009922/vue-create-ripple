import flushPromises from 'flush-promises';
import {
  computeRippleRadius, nextFrame, centerCoords, relativeMouseCoords, consoleWarn, applyStyles
} from '../tools';

describe('Tools', () => {
  describe('computeRippleRadius()', () => {
    // /**
    //  * Формула из теоремы пифагора
    //  */
    // function pythagoras(a: number, b: number): number {
    //   return (a ** 2 + b ** 2) ** 0.5;
    // }

    /**
     * description | width, height | x, y
     */
    type Case = [string, number, number, number, number];

    const cases: Case[] = [
      ['Center', 500, 500, 250, 250],
      ['Sector I', 100, 100, 60, 20],
      ['Sector II', 100, 100, 30, 20],
      ['Sector III', 100, 100, 10, 80],
      ['Sector IV', 100, 100, 90, 60]
    ];

    cases.forEach(([description, w, h, x, y]) => {
      it(description, () => {
        expect(computeRippleRadius(w, h, x, y)).toMatchSnapshot();
      });
    });
  });

  describe('nextFrame()', () => {
    interface MockedRequest {
      next: () => void;
      mock: jest.Mock;
    }

    function mockRequestAnimationFrame(): MockedRequest {
      let queue: (() => void)[] = [];

      jest.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => {
        queue.push(() => {
          cb(0);
        });
        return 0;
      });

      /**
       * Эта функция имитирует запуск всех колбеков
       */
      const next = () => {
        const current = [...queue];
        queue = [];
        current.forEach((x) => x());
      };

      return {
        next,
        mock: window.requestAnimationFrame as jest.Mock
      };
    }

    afterEach(() => {
      (window.requestAnimationFrame as jest.Mock).mockRestore();
    });

    it('Returns Promise', () => {
      mockRequestAnimationFrame();
      expect(nextFrame()).toBeInstanceOf(Promise);
    });

    it('After first requestAnimationFrame invoke second', () => {
      const { next, mock } = mockRequestAnimationFrame();

      nextFrame();

      expect(mock).toHaveBeenCalledTimes(1);

      next();
      expect(mock).toHaveBeenCalledTimes(2);
    });

    it('Callback not called after fisrt request', () => {
      const { next } = mockRequestAnimationFrame();
      const cb = jest.fn();

      nextFrame(cb);
      next();

      expect(cb).not.toHaveBeenCalled();
    });

    it('Promise not resolved after first request', async () => {
      const { next } = mockRequestAnimationFrame();

      const promise = nextFrame();
      let isPromiseDone = false;
      promise.then(() => {
        isPromiseDone = true;
      });
      next();
      await flushPromises();

      expect(isPromiseDone).toBe(false);
    });

    it('Callback called after second request', () => {
      const { next } = mockRequestAnimationFrame();
      const cb = jest.fn();

      nextFrame(cb);
      next();
      next();

      expect(cb).toHaveBeenCalled();
    });

    it('Promise resolved after second request', async () => {
      const { next } = mockRequestAnimationFrame();

      const promise = nextFrame();
      let isPromiseDone = true;
      promise.then(() => {
        isPromiseDone = true;
      });
      next();
      next();
      await flushPromises();

      expect(isPromiseDone).toBe(true);
    });
  });

  describe('centerCoords()', () => {
    it('Get center of element bounding rect', () => {
      const el = document.createElement('div');
      jest.spyOn(el, 'getBoundingClientRect').mockImplementation(
        () => ({
          x: 900,
          y: 0,
          width: 400,
          height: 20
        } as DOMRect)
      );

      const [cx, cy] = centerCoords(el);

      expect(cx).toEqual(200);
      expect(cy).toEqual(10);
    });
  });

  describe('relativeMouseCoords()', () => {
    it('Correctly compute mouse coords in element rect', () => {
      const el = document.createElement('div');
      const rect = {
        left: 192,
        top: 27,
        x: 192,
        y: 27,
        width: 400,
        height: 20
      } as DOMRect;
      jest.spyOn(el, 'getBoundingClientRect').mockImplementation(() => rect);
      const mouse = {
        clientX: 3,
        clientY: 234
      };

      const [x, y] = relativeMouseCoords(el, mouse);

      expect([x, y]).toMatchSnapshot();
    });
  });

  describe('consoleWarn()', () => {
    beforeEach(() => {
      jest.spyOn(console, 'warn').mockImplementation(() => null);
    });

    afterEach(() => {
      // eslint-disable-next-line no-console
      (console.warn as jest.Mock).mockRestore();
    });

    it('Logging with [Ripple] prefix', () => {
      const args = ['Hello', true, 'World!', 41234];
      consoleWarn(...args);

      // eslint-disable-next-line no-console
      expect(console.warn).toHaveBeenCalledWith('[Ripple]', ...args);
    });
  });

  describe('applyStyles()', () => {
    it('Applying all provided styles', () => {
      const el = document.createElement('div');
      const styles: Partial<CSSStyleDeclaration> = {
        height: '100px',
        transition: 'all .41s ease',
        color: 'red'
      };

      applyStyles(el, styles);

      expect(getComputedStyle(el)).toMatchSnapshot();
    });
  });
});
