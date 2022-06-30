import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
  'message_body': {
    type: String
  },
  'sender_id': {
    type: mongoose.Schema.Types.ObjectId
  },
  'receiver_id': {
    type: mongoose.Schema.Types.ObjectId
  },
  'dove_departure': {
    type: Date
  },
  'booster': {
    type: Boolean
  },
  'dove_arrived': {
    type: Date
  }
}, {collection: 'messages'})

export const MessageSchema = mongoose.model('messageSchema', messageSchema)