import express from 'express';
const router = express.Router();

import * as conv from '../controllers/conversations-controllers.js';

router.get('/', conv.getConversationList)
router.get('/detail', conv.getConversationDetail)
router.post('/', conv.createConversation)

export default router