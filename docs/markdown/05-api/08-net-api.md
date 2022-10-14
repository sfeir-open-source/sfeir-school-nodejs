# API: require(‘net’)

* `net.createServer()`: create a TCP server!
* `listen` to start listening to messages.
* open a read/write stream (stream.Duplex)
* events `end`, `data`, `close`, `error`...

<br>
<br>

https://nodejs.org/api/net.html
<!-- .element: class="credits" -->

##--##

<!-- .slide: class="with-code" -->

# API: require(‘net’)

Server

```javascript
const net = require('net');

const server = net.createServer(socket => {
	socket.write('Hello\n');
    socket.on('data', message => {
        process.stdout.write(message);
        socket.write("Message received\n");
    })
});
server.listen(4000, '127.0.0.1');
```

##--##

<!-- .slide: class="with-code" -->

# API: require(‘net’)

Client

```javascript
const net = require('net');

const client = new net.Socket();
client.connect(4000, '127.0.0.1', function() {
	console.log('Connected');
	client.write('Hello server\n');
});
client.on('data', function(data) {
	console.log('Response: ' + data);
});
client.on('close', function() {
	console.log('Connection closed');
});
```
