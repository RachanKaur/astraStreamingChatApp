const Pulsar = require('pulsar-client')

const tokenStr = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjbGllbnQ7NjAzYWY0MGYtMTZlNC00YjFjLWEyZDEtZDYwYmVkZjEwZmUwO2NtRmphR0Z1In0.YXJdy8xjnmxLgdid5D1uztjcJtLbWWaWCKq14wHsvd4Obfi09lc_vRdWgUZNd7DFLXawzCVyR6cCA80I7niJkZ8Ce62G_YKK4f6p0_S4FHL7FTi9_iphAYGGzgYIOCePjmzwnExDFoMfft5ISCTHqQrvULKoTJpIORSNmrKIJqlfO9mGcQAQ54HqDTAuJFVn129owGSdzuWheHWP2YenuTL18xTFRyJVFm0fo1U6Lfopxbodq5uHNl_I_WS4GzvqTP4ce9XjF874MJAG90arpS2jeAobqtIOcv0pab1Gu-BWgM52kn0rue2VuNnsJRvJa7C2W0NL8hgGukF3ZBYGjA";
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