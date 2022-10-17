const fs = require('fs');
const path = require('path');
const assert = require('assert');

describe('Exercice 1', () => {
  let stubConsoleLog;

  beforeEach(() => {
    stubConsoleLog = jest.spyOn(console, 'log').mockReturnThis();
  })

  it('Create a file "run.js"', () => {
    assert(fs.existsSync(path.join(__dirname, 'run.js')), 'The file "run.js" is missing');
  });
  it('Running "run.js" should display some text', () => {
    let error = null;
    try {
      require('./run.js');
    } catch (e) {
      error = e;
    } finally {
      if (error) {
        throw error;
      }
      expect(stubConsoleLog).toHaveBeenCalled();
    }
  });
});
