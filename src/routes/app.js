import { Router } from 'express';
import getAppVersion from '../controller/app/getAppVersion';
import updateAppVersion from '../controller/app/updateAppVersion';

const app = Router();

app.get('/', getAppVersion);
app.put('/', updateAppVersion);

export default app;