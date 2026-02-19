import  express  from 'express';
import { fetchData, signupUser } from '../controllers/formController.js';

const router = express.Router();


router.post("/signup", signupUser);
router.get('/user', fetchData);


export default router;