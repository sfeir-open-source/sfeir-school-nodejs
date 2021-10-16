const { EventEmitter } = require('events')

const emitter = new EventEmitter('')
emitter.on('foo', () => {
    console.log('first listener')
})
emitter.on('foo', () => {
    console.log('second listener')
})
emitter.emit('foo')
emitter.on('foo', () => {
    console.log('third listener never called')
})