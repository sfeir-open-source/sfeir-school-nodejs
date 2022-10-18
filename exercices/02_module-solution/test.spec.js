const fs = require('fs');
const path = require('path');
const assert = require('assert');

function getType(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1);
}

describe('Exercice 2', () => {

  let stubConsoleLog;

  beforeEach(() => {
    stubConsoleLog = jest.spyOn(console, 'log').mockReturnThis();
  })

  it('Create a file "hello.js"', () => {
    assert(fs.existsSync(path.join(__dirname, 'hello.js')), 'The file "hello.js" is missing');
  });
  it('The file "hello.js" must export a function', () => {
    const hello = require('./hello.js');
    assert(getType(hello) === 'Function', '"module.exports" do not export a function');
  });
  it('The function export by "hello.js" muse show a console : "Hello, {nom}!"', () => {
    const string = 'testString'
    const hello = require('./hello.js');
    hello(string);
    expect(stubConsoleLog).toHaveBeenCalledWith('Hello, testString!');
  });
  it('Create a file "run.js"', () => {
    assert(fs.existsSync(path.join(__dirname, 'run.js')), 'The file "run.js" is missing');
  });
  it('"run.js" must execute a function exported by "hello.js" with argument "Sfeir"', () => {
    const mockHello = jest.fn()
    jest.mock('./hello', () => mockHello);
    require('./run.js');
    expect(mockHello).toHaveBeenCalledWith('Sfeir');
  });
});
