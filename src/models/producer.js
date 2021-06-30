const { client , topicName } = require("../pulsarClient/pulsarClient")

const sendMessage = (async(message)=>{
  const producer = await client.createProducer({
    topic: topicName,
  })
  console.log('Producer created!')
  // Send messages
  
    producer.send({
      data: Buffer.from("nodejs-message-" + message),
    })
    console.log("send message " + message);
  
  await producer.flush()
  await producer.close()
  //await client.close()
})

module.exports = { sendMessage }


