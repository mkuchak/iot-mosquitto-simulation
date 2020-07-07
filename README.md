# How to setup

1. Enable the NodeSource repository by running the following curl command as a user with sudo privileges
```
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
```

2. Install Node.js and npm

```
sudo apt install nodejs
```

Follow this order to run broker, subscriber and publisher
```
node broker.js
node sub.js
node pub.js
```

Example https://i.snipboard.io/jIxg0O.jpg