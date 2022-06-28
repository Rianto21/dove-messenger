import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
  'message-body': {
    type: String
  },
  'sender-id': {
    type: mongoose.Schema.Types.ObjectId
  },
  'receiver-id': {
    type: mongoose.Schema.Types.ObjectId
  },
  'dove-departure': {
    type: Date
  },
  'booster': {
    type: Boolean
  },
  'dove-arrived': {
    type: Date
  }
}, {collection: 'messages'})

export const MessageSchema = mongoose.model('messageSchema', messageSchema)