import express from 'express';
const router = express.Router();

//Local Modules
import * as postc from '../controllers/posts-controllers.js' 
router.get('/', postc.addNewPost)

export default router;