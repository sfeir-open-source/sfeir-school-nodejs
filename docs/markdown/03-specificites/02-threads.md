# What inside: thread(s?)

* Design single-thread, unlike other platforms/languages (Java, Go…)
* Node is optimized for I/O by making non-blocking calls (file system, HTTP calls, web-socket…)
* if needed, we can use multiple threads but generally poorly suited for CPU-intensive operations

##==##

# What inside

![full-width](./assets/images/nodejs-system.svg)
