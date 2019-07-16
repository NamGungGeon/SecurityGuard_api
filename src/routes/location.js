import { Router } from 'express';

import auth from '../middleware/auth';
import isAdmin from '../middleware/isAdmin';

import getAllLocation from '../controller/location/getAllLocation';
import getLocation from '../controller/location/getLocation';
import addLocation from '../controller/location/addLocation';
import updateLocation from '../controller/location/updateLocation';
import deleteLocation from '../controller/location/deleteLocation';

const location = Router();

location.get('/', auth, isAdmin, getAllLocation);
location.get('/:id', auth, isAdmin, getLocation);
location.post('/', auth, isAdmin, addLocation);
location.patch('/:id', auth, isAdmin, updateLocation);
location.delete('/:id', auth, isAdmin, deleteLocation);

export default location;