import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
// import http, { Server } from 'http'
import dotenv from 'dotenv';
import * as socket from 'socket.io'

dotenv.config();

//local Modules
import postroutes from './routes/post.js'
import userroutes from './routes/users.js'
import messageroutes from './routes/message.js'

const app = express();
const router = express.Router();
const io = new socket.Server({});
io.on('connection', (server) => {
  console.log(server.id)
  server.on("send-message", message => {
    server.broadcast.emit("receive-message", message)
    console.log(message)
  })
});
io.listen(8080)

app.use(cors())
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

const PORT = process.env.PORT || 8000;

mongoose.connect(process.env.CONN_STRING, {useNewUrlParser: true, useunifiedTopology: true})
  .then(() => app.listen(PORT, console.log(`DB Connected Running in ${PORT}`)))
  .catch((error) => console.log(error.message));


// mongoose.set('useFindAndModify', false); 

