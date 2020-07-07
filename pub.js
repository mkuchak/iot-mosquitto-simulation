var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://test.mosquitto.org')

var topic = 'sd2020js2php'
var message = 'Hello, world!'

client.on('connect', () => {
    setInterval(() => {
        client.publish(topic, message)
        console.log('Message sent: ', message)
    }, 1000)
})