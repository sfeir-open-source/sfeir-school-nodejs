let racer1 = function () {
    setTimeout(() => console.log("timeout 1"), 0);
    setImmediate(() => console.log("immediate 1"));
    process.nextTick(() => console.log("nextTick 1"));
}
let racer2 = function () {
    process.nextTick(() => console.log("nextTick 2"));
    setTimeout(() => console.log("timeout 2"), 0);
    setImmediate(() => console.log("immediate 2"));
}
let racer3 = function () {
    setImmediate(() => console.log("immediate 3"));
    process.nextTick(() => console.log("nextTick 3"));
    setTimeout(() => console.log("timeout 3"), 0);
}
racer1()
racer2()
racer3()