import { Router } from 'express';

import auth from '../middleware/auth';
import identify from '../middleware/identify';

import getUsers from '../controller/user/getUsers';
import getUser from '../controller/user/getUser';
import updateUser from '../controller/user/updateUser';
import deleteUser from '../controller/user/deleteUser';
import addUserLogs from '../controller/user/addUserLogs';
import getUserLogs from '../controller/user/getUserLogs';
import deleteUserLogs from '../controller/user/deleteUserLogs';

const user = Router();

user.get('/', getUsers);
user.get('/:id', getUser);
user.patch('/:id', auth, identify, updateUser);
user.delete('/:id', auth, identify, deleteUser);

user.get('/:id/logs', auth ,identify, getUserLogs);
user.post('/:id/logs', auth, identify, addUserLogs);
user.delete('/:id/logs', auth, identify, deleteUserLogs);

user.put('/:id/emergency');
user.delete('/:id/emergency');

export default user;