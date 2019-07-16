import { Router } from 'express';

import auth from '../middleware/auth';
import isAdmin from '../middleware/isAdmin';
import getAllNotice from '../controller/notice/getAllNotice';
import getNotice from '../controller/notice/getNotice';
import addNotice from '../controller/notice/addNotice';
import updateNotice from '../controller/notice/updateNotice';
import deleteNotice from '../controller/notice/deleteNotice';

const notice = Router();

notice.get('/', auth, isAdmin, getAllNotice);
notice.get('/:id', auth, isAdmin, getNotice);
notice.post('/', auth, isAdmin, addNotice);
notice.put('/:id', auth, isAdmin, updateNotice);
notice.delete('/:id', auth, isAdmin, deleteNotice);

export default notice;