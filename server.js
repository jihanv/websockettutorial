const express = require("express");
const app = express(); //make an express app

console.log("Starting");
//serve files in public statically
app.use(express.static("public"));
const expressServer = app.listen(4000);

const socketio = require("socket.io");

//Socket.IO attaches itself to the server and basically says “If anyone requests a URL starting with /socket.io/, I will handle it.”
const io = socketio(expressServer, {});
