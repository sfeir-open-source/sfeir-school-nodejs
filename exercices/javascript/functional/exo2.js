const R = require('ramda');

let shoppingCart = [
  { productTitle: 'Functional Programming', type: 'books', amount: 10 },
  { productTitle: 'Kindle', type: 'eletronics', amount: 30 },
  { productTitle: "Who's who", type: 'books', amount: 25 },
  { productTitle: 'Shoes', type: 'fashion', amount: 20 },
  { productTitle: 'Clean Code', type: 'books', amount: 60 },
  { productTitle: 'Pleïade Compilation', type: 'books', amount: 90 },
  { productTitle: 'Fancy Shoes', type: 'fashion', amount: 200 },
  { productTitle: 'Albert Camus Collection', type: 'books', amount: 200 }
];

const byBooks = order => order.type === 'books';
const getAmount = order => order.amount;
const sumAmount = (acc, amount) => acc + amount;

const getTotalAmountViaPipe = R.pipe(
  // Premier appel de pipe()
  R.filter(byBooks),
  R.map(getAmount),
  R.reduce(sumAmount, 0)
);

getTotalAmountViaPipe(shoppingCart); // Second appel de pipe()

const totalAmountPipe = getTotalAmountViaPipe(shoppingCart);

module.exports = { totalAmountPipe };
