import {
  computeRippleRadius
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
});
