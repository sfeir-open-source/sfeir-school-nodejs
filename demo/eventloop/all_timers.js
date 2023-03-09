const bar = () => console.log("bar");
const baz = () => console.log("baz");
const tick = () => console.log("tick");

const immediate = () => console.log("immediate");
const timeout = () => console.log("timeout");

process.nextTick(tick);

const foo = () => {
  console.log("foo");
  setTimeout(timeout, 0);
  setImmediate(immediate);
  new Promise((resolve, reject) => {
    console.log("execute the promise code");
    return resolve("promise resolved");
  }).then((resolve) => {
    console.log(resolve);
  });
  baz();
};

foo();
