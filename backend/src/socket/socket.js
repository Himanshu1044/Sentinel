import { Server } from 'socket.io'

let io;

export const initSocket = (server) => {
    io = new Server(server, {
        cors: {
            origin: "*",
        }
    })

    io.on("connection", (socket) => {
        console.log(`client connected: ${socket.id}`)

        socket.emit('welcome', {
            message: "Connected to sentinel"
        })

        socket.on('disconnect', () => {
            console.log(`Client disconnected: ${socket.id}`);
        })

        return io;
    })
}

export const getIO = () => {
    if (!io) {
        throw new Error("Socket.io is not init")
    }
    return io;
}