const {totalAmount} = require('./exo.js');

describe('Test exercise for functional', function () {

  it('Is created correctly', () => expect(totalAmount).toEqual(385));

});
