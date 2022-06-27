import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

//local Modules
import postroutes from './routes/posts.js'

const app = express();
const router = express.Router();

app.use(cors())
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));

const rootroutes = router.get('/', (req, res) => {
    res.json({status: true,
    message: "OK"})
  })


app.use('/', rootroutes)
app.use('/posts', postroutes)

const PORT = process.env.PORT || 8000;

mongoose.connect(process.env.CONN_STRING, {useNewUrlParser: true, useunifiedTopology: true})
  .then(() => app.listen(PORT, console.log(`DB Connected Running in ${PORT}`)))
  .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false); 

