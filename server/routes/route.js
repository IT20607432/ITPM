import express from 'express';

import {addContact} from '../controller/contact-controller.js';

const router = express.Router();

router.post('/contact',addContact);

export default router;