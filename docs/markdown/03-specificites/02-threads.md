# What inside: thread(s?)

* Design single-thread, unlike other platforms/languages (Java, Go…)
* Node is optimized for I/O by making non-blocking calls (file system, HTTP calls, web-socket…)
* if needed, we can use multiple threads but generally poorly suited for CPU-intensive operations

##==##

# What inside

![full-width](./assets/images/nodejs-system.svg)

Notes: 
* Clients Send request to Web Server.
* Node JS Web Server internally maintains a Limited Thread pool to provide services to the Client Requests.
* Node JS Web Server receives those requests and places them into a Queue. It is known as “Event Queue”.
* Node JS Web Server internally has a Component, known as “Event Loop”. Why it got this name is that it uses indefinite loop to receive requests and process them. (See some Java Pseudo code to understand this below).
* Event Loop uses Single Thread only. It is main heart of Node JS Platform Processing Model.
* Even Loop checks any Client Request is placed in Event Queue.
  If no, then wait for incoming requests for indefinitely.

* If yes, then pick up one Client Request from Event Queue
  * Starts process that Client Request
  * If that Client Request Does Not requires any Blocking IO Operations, then process everything, prepare response and send it back to client.
  * If that Client Request requires some Blocking IO Operations like interacting with Database, File System, External Services then it will follow different approach
    * Checks Threads availability from Internal Thread Pool
    * Picks up one Thread and assign this Client Request to that thread.
    * That Thread is responsible for taking that request, process it, perform Blocking IO operations, prepare response and send it back to the Event Loop
    * Event Loop in turn, sends that Response to the respective Client.
