const fs = require("fs")

const bigFileName = "./big.file"

function toMegabytes(value) {
    return `${(value / (1024 * 1024)).toFixed(2)} MB`
}

function readFileWithoutStream() {
    fs.readFile(bigFileName, (err, buffer) => {
        if (err) {
            console.error(err)
            return
        }
        console.log(`File is read: ${toMegabytes(buffer.length)}.`)
        console.log(`Memory usage : ${toMegabytes(process.memoryUsage.rss())}.`)
    })
}

function readFileWithStream() {
    let size = 0
    const readStream = fs.createReadStream(bigFileName)
    readStream.on('data', (chunk) => {
        size += chunk.length
        //console.log(`Chunk is read: ${chunk.length} bytes.`)
    })
    readStream.on('error', (err) => console.error(err))
    readStream.on('close', () => {
        console.log(`File is read: ${toMegabytes(size)}.`)
        console.log(`Memory usage : ${toMegabytes(process.memoryUsage.rss())}.`)
    })
}

readFileWithStream()