import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  'username': {
    type: String
  },
  'email': {
    type: String
  },
  'phone_number': {
    type: String
  },
  'password': {
    type: String
  },
  'account_type': {
    type: String
  },
  'is_active': {
    type: Boolean
  },
  'is_verified': {
    type: Boolean
  },
  'full_name': {
    type: String
  },
  'dove': {
    type: Number
  },
  'super_dove': {
    type: Number
  },
  'created_time': {
    type: Number
  }
}, {collection: 'users'})

export const UserSchema = mongoose.model('userSchema', userSchema)