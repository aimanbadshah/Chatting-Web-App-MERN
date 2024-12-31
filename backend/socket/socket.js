import { Server } from "socket.io";
import http from 'http';
import express from 'express';

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST"]
    }
});

export const getReceiverSocketId = (recieverId) => {
    return userSocketMap[receiverId];
}

io.on('connection', (socket) => {
    console.log("a user connected", socket.id);

    const userId = socket.handshake.query.userId;

    if (userId != "undefined") userSocketMap[userId] = socket.id;

    io.emit("getOnlineUsers", Object.keys(userSocketMap));

    //listen to event on both server and user side
    socket.on("disconnet", () => {
        console.log("user disconnected", socket.id);
        delete userSocketMap[userId];
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    })
});

const userSocketMap = {}; //{userId: socketId}

export {app, io, server};