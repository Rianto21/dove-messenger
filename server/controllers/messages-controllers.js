import { MessageSchema } from '../models/messages.js';
import { UserSchema } from '../models/users.js';

import moment from 'moment';

export const SendMessage = async (req, res, next) => {
  try {
    const {message_body, sender_id, receiver_id, booster} = req.body
    let arrived;
    if(booster){
      arrived = new Date
    }else{
      arrived = moment().add(5, 'minutes').toDate();
    }

    const send_message = await MessageSchema.create(
      {
        'message_body': message_body,
        sender_id: sender_id,
        receiver_id: receiver_id,
        dove_departure: new Date,
        booster: false,
        dove_arrived: arrived
      }
    )

    res.json({
      status: true,
      message: "OK",
      data: send_message
    })
  } catch (error) {
    res.json({
      status: false,
      message: error
    })
  }
}

export const showReceivedMessage = async (req, res, next) => {
  try {
    const {sender_id, receiver_id} = req.body
    const showMessage = await MessageSchema.find({sender_id: sender_id, receiver_id: receiver_id, dove_arrived: {$gte: new Date}})
    if(showMessage.length >= 1){
      res.json({
        status: true,
        message: "OK",
        data: showMessage
      })
    }else{
      res.json({
        status: false,
        message: "Contact never made"
      })
    }
  } catch (error) {
    res.json({
      status: false,
      message: error
    })
  }
}