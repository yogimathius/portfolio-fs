const PORT = process.env.PORT || 8001;
const ENV = require("./environment");

const app = require("./app")(ENV);
const server = require("http").Server(app);

require('dotenv').config()
const admin = require('firebase-admin');

const WebSocket = require("ws");
const wss = new WebSocket.Server({ server });

wss.on("connection", socket => {
  socket.onmessage = event => {
    console.log(`Message Received: ${event.data}`);

    if (event.data === "ping") {
      socket.send(JSON.stringify("pong"));
    }
  };
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT} in ${ENV} mode.`);
});
