const MongoClient = require("mongodb").MongoClient;
const dbClient = new MongoClient(
  "mongodb+srv://sd2020:sd2020@sd2020.vdmoy.mongodb.net/sd?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useMongoClient: true,
    poolSize: 2,
    promiseLibrary: global.Promise,
    replicaSet: true,
  }
);

var mqtt = require("mqtt");

var mqttClient = mqtt.connect("mqtt://localhost:1234");
var topic = "sd2020js2php";

dbClient.connect(() => {
  const collection = dbClient.db("sd").collection("sd");

  mqttClient.on("message", (topic, message) => {
    message = message.toString();
    message = parseFloat(message);

    console.log(message);

    var json = {
      messageFromBroker: message,
    };
    collection.insertOne(json);
  });
});

mqttClient.on("connect", () => {
  mqttClient.subscribe(topic);
});
