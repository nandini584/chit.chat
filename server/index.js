const express=require('express');
const socketio=require('socket.io');
const http=require('http');
const app=express();
const PORT=process.env.PORT || 5000;
const router = require('./router')
const server = http.createServer(app);
const io=socketio(server)
app.use(router)

server.listen(PORT,()=>{
    console.log("server listening to port 5000")
})