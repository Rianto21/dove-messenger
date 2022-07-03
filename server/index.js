import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import http, { Server } from 'http'
import dotenv from 'dotenv';
import * as socketio from 'socket.io'

dotenv.config();

//local Modules
import postroutes from './routes/post.js'
import userroutes from './routes/users.js'
import messageroutes from './routes/message.js'
import conversationroutes from './routes/conversations.js'

const app = express();
app.use(cors())
const router = express.Router();
const server = http.createServer(app)
const io = new socketio.Server(server, {
  cors: {
    origin: "http://localhost:3000"
  }
});
io.on('connection', (socket) => {
  console.log(socket.id)
  socket.on("send-message", message => {
    socket.broadcast.emit("receive-message", message)
    console.log(message)
  })
});
io.listen(8080)

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));

const rootroutes = router.get('/', (req, res) => {
    res.json({status: true,
    message: "OK"})
  })

app.use('/', rootroutes)
app.use('/posts', postroutes)
app.use('/user', userroutes)
app.use('/message', messageroutes)
app.use('/conversation', conversationroutes)

const PORT = process.env.PORT || 8000;

mongoose.connect(process.env.CONN_STRING, {useNewUrlParser: true, useunifiedTopology: true})
  .then(() => app.listen(PORT, console.log(`DB Connected Running in ${PORT}`)))
  .catch((error) => console.log(error.message));


// mongoose.set('useFindAndModify', false); 

