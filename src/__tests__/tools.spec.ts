import {
  computeRippleRadius
} from '../tools';

describe('Tools', () => {
  describe('computeRippleRadius()', () => {
    it('Correct from center', () => {
      const rad = ((250 ** 2) * 2) ** 0.5;
      expect(computeRippleRadius(500, 500, 250, 250))?.toEqual(rad);
    });
  });
});
