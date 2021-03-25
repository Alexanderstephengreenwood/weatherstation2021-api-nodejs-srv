# weatherstation2021-api-nodejs-srv

Testing a change with git local to remote

This is a tentative in creating a REST API server with Nodes JS, Express and MongoDB in order to;
- Receive environment data posts from IoT devices
- Serve the data for RESTfull requests in order to build data dashboards

This repository is heavely based on and thank you to:
- http://thecodingtrain.com/ https://github.com/CodingTrain
- https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs


The elements and modules developped are
- Nodes JS
- NPM modules --> Express/Mongoose etc...
- MongoDB

Data elements currently handeled and servered are: Temperature, Humidity, Pressure, Luminosity, Air Quality
Data elements planned, Giger counter, Air particules, gas, wind speed/wind direction

Devices in use are Arduino mkr1010, mkr1300, mkr1000, UNO, DUE. Raspberry Pi 3, Microsoft Azure Sphere

Sensors: Boesch BME680, DHT11, DHT22

Transport layers Wifi and LoRaWan
