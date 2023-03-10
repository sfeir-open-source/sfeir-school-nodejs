# Les API: require(‘net’)

* `net.createServer()`: crée un serveur TCP !
* `listen` pour commencer à écouter les messages.
* ouvre un flux lecture/écriture (stream.Duplex)
* évènements `end`, `data`, `close`, `error`...

<br>
<br>

https://nodejs.org/api/net.html
<!-- .element: class="credits" -->

##--##

<!-- .slide: class="with-code" -->

# Les API: require(‘net’)

Serveur

```javascript
const net = require('net');

const server = net.createServer(socket => {
	socket.write('Bonjour\n');
    socket.on('data', message => {
        process.stdout.write(message);
        socket.write("Message reçu\n");
    })
});
server.listen(4000, '127.0.0.1');
```

##--##

<!-- .slide: class="with-code" -->

# Les API: require(‘net’)

Client

```javascript
const net = require('net');

const client = new net.Socket();
client.connect(4000, '127.0.0.1', function() {
	console.log('Connected');
	client.write('Bonjour serveur\n');
});
client.on('data', function(data) {
	console.log('Réponse: ' + data);
});
client.on('close', function() {
	console.log('Connection closed');
});
```