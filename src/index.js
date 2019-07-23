import express from 'express';
import model from './model';
import routes from './routes';
import cors from 'cors';

import YAML from 'js-yaml';
import fs from 'fs';
import swaggerUI from 'swagger-ui-express';

const swaggerDocs = YAML.safeLoad(fs.readFileSync('./docs.yaml'));

const app = express();

model.sequelize.sync({ force: false });

app.use(cors());

app.use('/', swaggerUI.serve);
app.get('/', swaggerUI.setup(swaggerDocs));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', routes);
app.use((err, req, res, next) => {
    const { message } = err;
    return res.status(500).json({ message });
});

app.listen(80, () => {
    console.log("server start");
});