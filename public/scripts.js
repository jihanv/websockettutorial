// Create a live connection from your browser (client) to your Socket.IO server i.e. connect to the Socket.IO server running at http://localhost:4000
const socket = io("http://localhost:4000");

// our socket has an on method and emit method
socket.on("welcome", (data) => {
  console.log(data);
  socket.emit("thank you");
});
