1. Enable the NodeSource repository by running the following curl command as a user with sudo privileges:
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -

2. Install Node.js and npm
sudo apt install nodejs

3. Install MQTT and command line tools
sudo npm install mqtt --save && sudo npm install mqtt -g

4. Install MongDB driver for node
sudo npm install mongodb --save && sudo npm install mongodb -g