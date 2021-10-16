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