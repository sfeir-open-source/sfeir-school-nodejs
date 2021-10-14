function exercise1Fn() {
  let exercise1 = new Promise((resolve) => {
    setTimeout(() => resolve('I Love Promise'), 500);
  });

  return exercise1.then(val => console.log(val));
}

function exercise2Fn() {
  let exercise2 = new Promise((resolve, reject) => {
    setTimeout(() => reject('I hate rejection'), 500);
  });

  return exercise2.catch(val => console.log(val));
}

function exercise3Fn() {
  let exercise3 = Promise.resolve(1);

  function plusFive(value) {
    /* votre solution ici */
    return value + 5;
  }

  function multiplyByTwo(value) {
    /* votre solution ici */
    return value * 2;
  }

  function minusFour(value) {
    /* votre solution ici */
    return value - 4;
  }

   /* votre solution ici */;
  return exercise3
    .then(plusFive)
    .then(multiplyByTwo)
    .then(minusFour);
}

module.exports = { exercise1Fn, exercise2Fn, exercise3Fn };
