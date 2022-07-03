import { ConversationSchema } from "../models/conversation";

export const createConversation = async (req, res) => {
  try {
    const { user_id, friend_id} = req.body
    const  new_conversation = new ConversationSchema({
      members: [user_id, friend_id]
    })
    const saved_conversation = await new_conversation.save();
    res.json({
      status: true,
      message: "OK",
      data: saved_conversation
    })
  } catch (error) {
    
  }
}
export const getConversationList = async (req, res) => {
  try {
    const { user_id } = req.body
    const conversation_list = ConversationSchema.find({ members: { $in: [user_id]}})
    res.json({
      status: true,
      message: "OK",
      data: conversation_list
    })
  } catch (error) {
    res.json({
      status: false,
      message: error
    })
  }
}

export const getConversationDetail = async (req, res) => {
  try {
    const { user_id, friend_id } = req.body
    const conversation = ConversationSchema.findOne({
      members: {$all: [user_id, friend_id]}
    })
    res.json({
      status: true,
      message: "OK",
      data: conversation
    })
  } catch (error) {
    res.json({
      status: false,
      message: error
    })
  }
}