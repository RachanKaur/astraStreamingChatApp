const app = require('./app')
const { sendMessage } = require('./models/producer')
// const { readMessage } = require('./models/reader')
const { consumeMessage } = require('./models/consumer')

const socketio = require('socket.io')
const http = require('http')
const { randomInt } = require('crypto')
const server = http.createServer(app)
const io = socketio(server)
const port = 3000

const generateMessage = (text) => {
    return {
        text ,
        createdAt: new Date().getTime()
    }
}

// const generateUser = (text) => {
//     return {
//         text
//     }
// }

io.on('connection', (socket) => {
    console.log('New Websocket connection.')

    socket.on('sendMessage', (message , callback) => {
        
        //Pulsar producer call
        sendMessage(message)
        //Pulsar reader call
        io.emit('message', generateMessage(message))
        callback()
    })


    
    socket.on('disconnect', () => {
        //Pulsar consumer call
        consumeMessage()
        
    })
})

server.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})



 