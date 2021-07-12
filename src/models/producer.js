const { randomInt } = require("crypto")
const { Pulsar, client , topicName } = require("../pulsarClient/pulsarClient")
const SchemaObject = require('avro-js');

//Schema Object
const schemaObject = SchemaObject.parse({
  name: 'Message',
  type: 'record',
  fields: [
    {name: 'id', type: 'int'},
    {name: 'message', type: 'string'}
  ]
})

//Send message function
const sendMessage = (async(message)=>{
  const producer = await client.createProducer({
    topic: topicName,
    schema: schemaObject.getSchema()
  })
  console.log('Producer created!')
  console.log(schemaObject)
  // Send messages
    producer.send({
      id: randomInt(1000),
      message: Buffer.from(message)
    })
    console.log("send message " + message);
  
  await producer.flush()
  //await producer.close()
  //await client.close()
})

module.exports = {
  sendMessage }


