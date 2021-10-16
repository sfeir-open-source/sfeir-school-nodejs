const { EventEmitter } = require('events')

const emitter = new EventEmitter('')
emitter.on('foo', (data) => {
    console.log(`first listener: ${data}`)
})
emitter.on('foo', (data) => {
    console.log(`second listener: ${data}`)
})
emitter.emit('foo', "Hello")
emitter.on('foo', (data) => {
    console.log('third listener never called')
})