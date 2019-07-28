import { Router } from 'express';

import auth from '../middleware/auth';
import isAdmin from '../middleware/isAdmin';

import getAllAd from '../controller/ad/getAllAd';
import getAd from '../controller/ad/getAd';
import addAd from '../controller/ad/addAd';
import updateAd from '../controller/ad/updateAd';
import deleteAd from '../controller/ad/deleteAd';

const ad = Router();

ad.get('/', getAllAd);
ad.get('/:id', getAd);
ad.post('/', auth, isAdmin, addAd);
ad.put('/:id', auth, isAdmin, updateAd);
ad.delete('/:id', auth, isAdmin, deleteAd);

export default ad;