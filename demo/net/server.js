const net = require('net');

const server = net.createServer(socket => {
	socket.write('Bienvenue\n');
    socket.on('data', message => {
        console.log(message.toString());
        socket.write("OK client\n");
    })
    socket.on('error', () => {})
});
server.listen(4000, '127.0.0.1');

//nc 127.0.0.1 4000