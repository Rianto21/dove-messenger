import express from 'express';
const router = express.Router();

import * as mc from '../controllers/messages-controllers.js';

router.get('/', mc.showReceivedMessage)
router.post('/', mc.SendMessage)

export default router