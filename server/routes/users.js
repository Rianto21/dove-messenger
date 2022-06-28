import express from 'express';
const router = express.Router();

import * as uc from '../controllers/users-controllers.js';

router.get('/')
router.put('/')
router.post('/', uc.RegisterUser)

export default router