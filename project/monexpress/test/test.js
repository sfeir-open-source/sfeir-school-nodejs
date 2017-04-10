const assert = require('assert');

const monexpress = require('../monexpress');

const app = monexpress();

describe('monexpress', () => {
  it('should expose some functions', () => {
    assert.deepEqual(Object.keys(app), ['close', 'listen', 'get', 'post']);
  });
});
