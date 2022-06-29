import express from 'express';
const router = express.Router();

import * as uc from '../controllers/users-controllers.js';

router.get('/', uc.getAllUser)
router.get('/byid', uc.getUserById)
router.get('/login', uc.LoginUser)
router.put('/', uc.UpdateUser)
router.put('/verify', uc.VerifyUser)
router.put('/refresh', uc.RefreshDoveUser)
router.post('/', uc.RegisterUser)

export default router