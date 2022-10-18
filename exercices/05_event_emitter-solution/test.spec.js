const fs = require('fs');
const path = require('path');

describe('Event emitter', () => {

  let stubConsoleLog
  beforeAll(() => {
    stubConsoleLog = jest.spyOn(console, 'log').mockReturnThis();
  });

  afterAll(() => {
    stubConsoleLog.mockRestore();
  });

  it('Create a file"run.js"', () => {
    expect(fs.existsSync(path.join(__dirname, 'run.js'))).toBeTruthy();
  });

  it("The program displays 'Got a ping!' then 'Got a pong' a second later", done => {
    require('./run.js')
    setTimeout(() => {
      expect(stubConsoleLog).toHaveBeenNthCalledWith(1, 'Got a ping!');
      expect(stubConsoleLog).toHaveBeenNthCalledWith(2, 'Got a pong!');
      expect(stubConsoleLog).toHaveBeenNthCalledWith(3, 'Got a ping!');
      expect(stubConsoleLog).toHaveBeenNthCalledWith(4, 'Got a pong!');
      done();
    }, 4000);
  });
});
