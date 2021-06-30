const app = require('./app')
const { sendMessage } = require('./models/producer')
const { receiveMessage } = require('./models/consumer')

sendMessage('Hello world!')
receiveMessage()