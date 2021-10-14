const {MainCoon} = require('./exo.js');

describe('Test exercise for classes', function () {

  let instanceToTest;

  beforeEach(() => {
    spyOn(console, 'log');
    instanceToTest = new MainCoon('Garfield', 'red');
  });

  it('Is create correctly', () => expect(instanceToTest).toBeDefined());

  it('Have a name', () => expect(instanceToTest.name).toBe('Garfield'));

  it('Have a color', () => expect(instanceToTest.color).toBe('red'));

  it('Have a meow()', () => expect(instanceToTest.meow).toBeDefined());

  it('Have a sleep()', () => expect(instanceToTest.sleep).toBeDefined());

  it('Have a play()', () => {
    instanceToTest.play();
    expect(console.log.calls.count()).toBe(2);
  });

});
