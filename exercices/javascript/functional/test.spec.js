const { totalAmount } = require('./exo.js');

describe('Test exercise for functional Exercice 1', function() {
  it('Is create correctly', () => expect(totalAmount).toEqual(385));
});

const { totalAmountPipe } = require('./exo2.js');

describe('Test exercise for functional Exercice 2', function() {
  it('Is create correctly', () => expect(totalAmountPipe).toEqual(385));
});
