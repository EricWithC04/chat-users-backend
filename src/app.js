import Express from "express"
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"
import http from "http"
import { Server } from "socket.io"
import fileUpload from "express-fileupload"

import exampleRouter from "./routes/example.routes.js"
import userRouter from "./routes/user.routes.js" 

const app = Express()

app.use(cors())
app.use(helmet())
app.use(morgan("dev"))
app.use(Express.json())
app.use(fileUpload())

app.use("/example", exampleRouter)
app.use("/user", userRouter)

const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"]
    }
})

io.on('connection', (socket) => {
    console.log('A user connected');
    
    socket.on('set name', (name) => {
        socket.name = name
    })

    socket.on('message', (msg => {
        console.log('message: ', msg);
        io.emit('message', { user: socket.name, message: msg })
    }))

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
})

export default server