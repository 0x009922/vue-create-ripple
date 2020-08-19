import { mergeDefaults } from '../ripple-options';

describe('Ripple options', () => {
  describe('mergeDefaults()', () => {
    it('Correct merging', () => {
      expect(mergeDefaults({
        class: 'custom',
        appearDuration: '1234010s',
        circleStyle: {
          color: 'red'
        }
      })).toMatchSnapshot();
    });
  });
});
