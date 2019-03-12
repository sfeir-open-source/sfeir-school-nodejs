const fs = require('fs');
const path = require('path');

describe('Exercice 4', () => {

  let stubConsoleLog
  beforeAll(() => {
    stubConsoleLog = jest.spyOn(console, 'log').mockReturnThis();
  });

  afterAll(() => {
    stubConsoleLog.mockRestore();
  });

  it('Créez un ficher "run.js"', () => {
    expect(fs.existsSync(path.join(__dirname, 'run.js'))).toBeTruthy();
  });

  it("Le programme affiche 'Got a ping!' puis 'Got a pong' une seconde plus tard", (done) => {
    require('./run.js');
    setTimeout(() => {
      expect(stubConsoleLog).toHaveBeenNthCalledWith(1, 'Got a ping!');
      expect(stubConsoleLog).toHaveBeenNthCalledWith(2, 'Got a pong!');
      expect(stubConsoleLog).toHaveBeenNthCalledWith(3, 'Got a ping!');
      expect(stubConsoleLog).toHaveBeenNthCalledWith(4, 'Got a pong!');
      done();
    }, 4000);
  });
});
