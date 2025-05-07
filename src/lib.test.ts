import { add } from './lib';

describe('add', () => {
  it('add(1,2) == 3', () => {
    expect(add(1, 2)).toBe(3);
  });
});
