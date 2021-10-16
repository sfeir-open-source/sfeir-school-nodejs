
const { fork } = require('child_process');
const { createServer } = require('http');
const { URL} = require('url');

// call the server with curl http://localhost:4242?n=10
const server = createServer(function (req, res) {
    const n = new URL(req.url, `http://${req.headers.host}`).searchParams.get("n")
    const compute = fork('fibonacci.js');
    compute.send(n);
    compute.on('message', result => {
        console.log(`Fibonacci ${n} is ${result}`);
        res.writeHead(200);
        res.end(result + "\n");
    });
});
server.listen(4242, () => { console.log("server online at http://localhost:4242/") });
