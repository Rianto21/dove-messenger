import mongoose from "mongoose";

const userValidationSchema = mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId
  },
  user_email: {
    type: String
  },
  validation_number: {
    type: Number
  },
  created_at: {
    type: Date
  }
}, {collection: 'user_validation'})

export const UserValidationSchema = mongoose.model('userValidationSchema', userValidationSchema)
