const Pulsar = require('pulsar-client')

const tokenStr = "";
const pulsarUri = "pulsar+ssl://pulsar-aws-useast2.streaming.datastax.com:6651";
const topicName ="persistent://rachan/default/learn3";

  // CentOS RHEL:
// const trustStore = "/etc/ssl/certs/ca-bundle.crt";
  // Debian Ubuntu:

const auth = new Pulsar.AuthenticationToken({ token: tokenStr });

// Create Pulsar Client
const client = new Pulsar.Client({
    serviceUrl: pulsarUri,
    authentication: auth,
    operationTimeoutSeconds: 30,
  });
console.log('Pulsar-client connection successful')

  module.exports = {
      topicName,
      client,
      Pulsar
  }
