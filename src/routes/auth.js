import { Router } from 'express';

import signin from '../controller/auth/signin';
import signup from '../controller/auth/signup';
import getToken from '../controller/auth/getToken';

const auth = Router();

auth.post('/signin', signin);
auth.post('/signup', signup);
auth.get('/token', getToken);

export default auth;