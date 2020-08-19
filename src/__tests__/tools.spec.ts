import flushPromises from 'flush-promises';
import {
  computeRippleRadius, nextFrame
} from '../tools';

describe('Tools', () => {
  describe('computeRippleRadius()', () => {
    /**
     * Формула из теоремы пифагора
     */
    function pythagoras(a: number, b: number): number {
      return (a ** 2 + b ** 2) ** 0.5;
    }

    /**
     * description | width, height | x, y | expected x, y
     */
    type Case = [string, number, number, number, number, number, number];

    const cases: Case[] = [
      ['Center', 500, 500, 250, 250, 250, 250],
      ['Sector I', 100, 100, 60, 20, 60, 80],
      ['Sector II', 100, 100, 30, 20, 70, 80],
      ['Sector III', 100, 100, 10, 80, 90, 80],
      ['Sector IV', 100, 100, 90, 60, 90, 60]
    ];

    cases.forEach(([description, w, h, x, y, a, b]) => {
      it(description, () => {
        expect(computeRippleRadius(w, h, x, y)).toEqual(pythagoras(a, b));
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
        queue.forEach((x) => x());
        queue = [];
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
});
