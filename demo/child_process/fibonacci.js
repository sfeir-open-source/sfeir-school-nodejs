function fib(n) {
    if (n < 2) {
        return 1;
    } else {
        return fib(n - 2) + fib(n - 1);
    }
}
process.on('message', (n) => {
    const result = fib(n);
    process.send(result);
    process.exit(0)
  });