import { WebSocketServer } from "ws"

export {WebSocketServer} from "ws"
const wss = new WebSocketServer({port:8080})

wss.on("connection",(socket)=>{
    socket.send("hello from the server")

})