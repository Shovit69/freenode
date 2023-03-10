const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response',(name, code)=>{
    console.log(`user:${name} ${code}`);
})

customEmitter.emit('response','shovit',69)