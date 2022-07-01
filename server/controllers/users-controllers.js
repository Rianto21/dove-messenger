import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config()

import { UserSchema } from '../models/users.js';
import { UserValidationSchema } from '../models/user_validation.js';

const encrypt = {
  cryptPassword: (password) =>
  bcrypt.genSalt(10)
    .then((salt => bcrypt.hash(password, salt)))
    .then(hash => hash),

  comparePassword: (password, hashPassword) =>
    bcrypt.compare(password, hashPassword)
    .then(resp => resp)
}

export const getAllUser = async (req, res, next) => {
  try {
    const alluser = await UserSchema.find({})
    res.json({
      status: true,
      message: "OK",
      data: alluser
    })
  } catch (error) {
    res.json({
      status: false,
      message: error
    })
  }
}

export const getUserById = async (req, res, next) => {
  try {
    const user = await UserSchema.find({_id: req.body._id})
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

export const RegisterUser = async (req, res, next) => {
  try{
    const {username, email, phone_number, password, full_name} = req.body
    // console.log(req.body)  

    const enPassword = await encrypt.cryptPassword(password)
    // console.log(enPassword)
    const email_check = await UserSchema.find({email: email})
    let response
    if(email_check.length == 0){
      const user = new UserSchema({
        username: username,
        email: email,
        phone_number: phone_number,
        password: enPassword,
        account_type: 'regular',
        is_active: true,
        is_verified: false,
        full_name: full_name,
        created_at: new Date
      })
      user.save();
      let random = Math.floor(100000 + Math.random() * 900000)
      // console.log(random)
      const uservalidationscheme = await UserValidationSchema.create({
        'user_id': user._id, 
        'user_email': email,
        'validation_number': random
      })

      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: process.env.MAILER_EMAIL, // generated ethereal user
          pass: process.env.MAILER_PASSWORD // generated ethereal password
        },
      });

      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: process.env.MAILER_EMAIL, // sender address
        to: user.email, // list of receivers
        subject: "VERIFICATION Dove Messenger <No Reply>", // Subject line
        text: `Here is your verification number: ${random}`, // plain text body
        html: `<b>${random} is your verification number</b>`, // html body
      });      
      response = {
        status: true,
        message: "OK",
        data: user,
        email_response: info.response
      }
    }else{
      response = {
        status: false,
        message: `User with email ${email} already existed`
      }
    }
    res.json(response)
  } catch (error) {
    res.json({
      status: false,
      message: error
    })
  }
}

export const LoginUser = async (req, res, next) => {
  try {
    const { email, password} = req.body
    const userdata = await UserSchema.find({email: email})
    let response
    if(userdata.length > 0){
      const pass_check = await encrypt.comparePassword(password, userdata.password)
      if (pass_check) {
        response = {
          status: true,
          message: "User Found",
          data: userdata
        }
      } else {
        response = {
          status: false,
          message: "Wrong Password"
        }
      }
    }else{
      response = {
        status: false,
        message: "User Not Found"
      }
    }
    res.json(response)
  } catch (error) {
    res.json({
      status: false,
      message: Error
    })
  }
}

export const VerifyUser = async (req, res, next) => {
  try {
    const {user_id, verification_number} = req.body
    const validation_check = await UserValidationSchema.find({user_id: user_id, validation_number: verification_number})
    let response;
    if(validation_check.length > 0){
      await UserSchema.updateOne({_id: user_id}, {
        $set: {
          'is_verified': true
        }
      })
      response = {
        status: true,
        message: "Email has been validate"
      }
    }else{
      response = {
        status: false,
        message: "Validation False"
      }
    }
    res.json(response)
  } catch (error) {
    res.json({
      status: false,
      message: error
    })
  }
}

export const requestValidation = async (req, res, next) => {
  try {
    const {user_id, user_email} = req.body
    let random = Math.floor(100000 + Math.random() * 900000)
    const uservalidationscheme = await UserValidationSchema.create({
      'user_id': user_id, 
      'user_email': email,
      'validation_number': random
    })

    //EMAIL SENDER
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.MAILER_EMAIL, // generated ethereal user
        pass: process.env.MAILER_PASSWORD // generated ethereal password
      },
    });
    let info = await transporter.sendMail({
      from: process.env.MAILER_EMAIL, // sender address
      to: user.email, // list of receivers
      subject: "VERIFICATION Dove Messenger <No Reply>", // Subject line
      text: `Here is your verification number: ${random}`, // plain text body
      html: `<b>${random} is your verification number</b>`, // html body
    });   

    res.json({
      status: true,
      message: "OK",
      email_response: info.response
    })
  } catch (error) {
    res.json({
      status: false,
      message: error
    })
  }
}

export const UpdateUser = async (req, res, next) => {
  try {
    const {user_id, username, email, phone_number, password, full_name} = req.body
    const enPassword = await encrypt.cryptPassword(password)
    const usernewdata = await UserSchema.updateOne({_id: user_id}, {
      username: username,
      email: email,
      phone_number: phone_number,
      password: enPassword,
      full_name: full_name,
    })
    res.json({
      status: true,
      message: "Data Updated",
      data: usernewdata
    })
  } catch (error) {
    res.json({
      status: false,
      message: error
    })
  }
}

export const RefreshDoveUser = async (req, res, next) => {
  try {
    await UserSchema.updateMany({}, {$set: {
      dove: 20,
      super_dove: 5
    }})
    res.json({
      status: true,
      message: "User Dove Refreshed"
    })
  } catch (error) {
    res.json({
      status: false,
      message: error
    })
  }
}

export const addFriend = async (req, res, next) => {
  try {
    const {user_id, friend_email, friend_name} = req.body
    const add = await UserSchema.updateOne({_id: user_id}, {
      $push: {
        "friend_list": {
          'friend_email': friend_email,
          'friend_name': friend_name,
        }
      }
    })
    res.json({
      status: true,
      message: "OK",
      data: add
    })
  } catch (error) {
    res.json({
      status: false,
      message: "OK"
    })
  }
}