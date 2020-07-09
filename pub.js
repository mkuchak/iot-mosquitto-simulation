var mqtt = require("mqtt");
var client = mqtt.connect("mqtt://localhost:1234");

var topic = "sd2020js2php";
var message = 20;

client.on("connect", () => {
  setInterval(() => {
    message = parseFloat(message);
    if (Math.round(Math.random())) {
      message = message + (Math.random() * (0.12 - 0.02) + 0.02);
    } else {
      message = message - (Math.random() * (0.12 - 0.02) + 0.02);
    }

    message = message.toString();
    client.publish(topic, message);
    console.log("Message sent: ", message);
  }, 200);
});
