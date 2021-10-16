const { stdin, stdout } = require("process");
const { Transform } = require("stream");

class Base64Encode extends Transform {
    constructor(opts) {
        super(opts);
    }
    _transform(chunk, encoding, callback) {
        this.push(chunk.toString('base64'));
        callback();
    }
}
stdin.pipe(new Base64Encode()).pipe(stdout);