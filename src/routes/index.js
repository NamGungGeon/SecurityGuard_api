import { Router } from 'express';

import user from './user';
import location from './location';
import auth from './auth';
import ad from './ad';
import app from './app';
import notice from './notice';

const router = Router();

router.use('/users', user);
router.use('/locations', location);
router.use('/auth', auth);
router.use('/ads', ad);
router.use('/app', app);
router.use('/notices', notice);

export default router;