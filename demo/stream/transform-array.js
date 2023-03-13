const { Transform } = require("stream");

/*
Array stringifier
[1,2,3] => ["1", "2", "3"]
*/

class Parser extends Transform {
    constructor(opts = {}) {
        super({readableObjectMode: true, ...opts})
    }
    _transform(chunk, encoding, callback) {
        const r = JSON.parse(chunk);
        this.push(r);
        callback();
    }
    _flush(callback) {
        callback(null);
    }
}

class Stringifier extends Transform {
    constructor(opts = {}) {
        super({...{writableObjectMode: true}, ...opts})
    }
    _transform(chunk, encoding, callback) {
        if(!Array.isArray(chunk)) {
            return callback(Error("Input should be an array"))
        }
        callback(null, chunk.toString());
    }
}

process.stdin
.pipe(new Parser())
.pipe(new Stringifier())
.pipe(process.stdout);