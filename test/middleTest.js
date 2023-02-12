const assert = require('chai').assert;
const middle = require('../middle');


describe('middle', () => {
  it('returns [2, 3] for [1, 2, 3, 4]', () => {
    const result = middle([1, 2, 3, 4]);
    assert.deepEqual(result, [2, 3]);
  });

  it('returns 2 for [1, 2, 3]', () => {
    const result = middle([1, 2, 3]);
    assert.deepEqual(result, 2);
  });

  it('returns 1 for [1]', () => {
    const result = middle([1]);
    assert.deepEqual(result, 1);
  });
});
