import { UserSchema } from '../models/users.js';
import * as bcrypt from 'bcrypt';

const encrypt = {
  cryptPassword: (password) =>
  bcrypt.genSalt(10)
    .then((salt => bcrypt.hash(password, salt)))
    .then(hash => hash),

  comparePassword: (password, hashPassword) =>
    bcrypt.compare(password, hashPassword)
    .then(resp => resp)
}


export const RegisterUser = async (req, res, next) => {
  try {
    const {username, email, phone_number, password, full_name} = req.body
    // console.log(req.body)  

    const enPassword = await encrypt.cryptPassword(password)
    // console.log(enPassword)

    const user = new UserSchema({
      username: username,
      email: email,
      phone_number: phone_number,
      password: enPassword,
      account_type: 'regular',
      is_active: true,
      is_verified: false,
      full_name: full_name,
      dove: 20,
      super_dove: 5,
      created_at: new Date
    })
    user.save();

    res.json({
      status: true,
      message: "OK",
      data: user
    })
  } catch (error) {
    res.json({
      status: false,
      message: error
    })
  }
}

export const LoginUser = async (req, res, next) => {
  try {
    
  } catch (error) {
    
  }
}

export const VerifyUser = async (req, res, next) => {
  try {
    
  } catch (error) {
    
  }
}

export const UpdateUser = async (req, res, next) => {
  try {
    
  } catch (error) {
    
  }
}

export const RefreshDoveUser = async (req, res, next) => {
  try {
    
  } catch (error) {
    
  }
}