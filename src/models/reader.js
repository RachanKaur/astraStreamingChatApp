const { client , topicName, Pulsar } = require("../pulsarClient/pulsarClient")

// Create a reader
// Create a reader
const readMessage = (async () => {
    
    const reader = await client.createReader({
        topic: topicName,
        startMessageId: Pulsar.MessageId.earliest(),
      })
      console.log("Reader created!")

      console.log((await reader.readNext()).getData().toString())

      for (let i = 0; i < 1000; i += 1) {
        console.log((await reader.readNext()).getData().toString())
      }
    
      //await reader.close()




    }
)



module.exports = {
    readMessage
}