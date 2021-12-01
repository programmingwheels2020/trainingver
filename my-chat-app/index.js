const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io")

const io = new Server(server);

io.on('connection', (socket) => {
    console.log("Client Connected with socket " + socket.id);
    socket.on('disconnect', () => {
        console.log("Socket disconnected ")
    })

    socket.on("chat_message", (data,) => {

        console.log(data);
        io.emit("send_message", data);
    })
})

app.use((req, res, next) => {
    req.io = io;
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
});


server.listen(3000, () => {
    console.log('listening on *:3000');
});