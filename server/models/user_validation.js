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
  createdAt: {
    type: Date,
    default: Date.now,
  }
}, {collection: 'user_validation'} ) 

userValidationSchema.index({createdAt: 1},{expireAfterSeconds: 300})

export const UserValidationSchema = mongoose.model('userValidationSchema', userValidationSchema)
