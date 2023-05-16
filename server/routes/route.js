import express from 'express';

import {addContact} from '../controller/contact-controller.js';
import { loginPatient, registerP } from '../controller/regPatient-controller.js';
import { loginDoctor, registerD } from '../controller/regDoctor-controller.js';

const router = express.Router();

router.post('/contact',addContact);
router.post('/signup',registerP);
router.post('/login',loginPatient);
router.post('/DSignup',registerD);
router.post('/Dlogin',loginDoctor);


export default router;

//route is the endpoint of the API , example ('/signup') here /signup is the API  - https://facbook.com/signup is the API URL