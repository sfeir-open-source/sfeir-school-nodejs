const { Transform } = require('stream')
const TransformStream = new Transform();
TransformStream._transform = (chunk, encoding, callback) => {
    TransformStream.push(chunk.toString().toUpperCase());
    callback();
}
process.stdin.pipe(TransformStream).pipe(process.stdout);