const { client , topicName } = require("../pulsarClient/pulsarClient")

const consumeMessage = (async()=>{
    // Create consumer
    const subscriptionName = "my-subscription"

    const consumer = await client.subscribe({
        topic: topicName,
        subscription: subscriptionName,
        subscriptionType: "Exclusive",
        ackTimeoutMs: 10000,
    })
    console.log('consumer created!')

  //Receive and acknowledge messages
  for (let i = 0; i < 100; i += 1) {
    const msg = await consumer.receive();
    console.log(msg.getData().toString());
    consumer.acknowledge(msg);
  }
  await consumer.close();
  //await client.close();
})

module.exports = { consumeMessage }