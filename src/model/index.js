import Sequelize from 'sequelize';

import config, { database, username, password } from '../config/database.json';

import UserModel from './user';
import LocationModel from './location';
import AppModel from './app';
import AdModel from './ad';
import NoticeModel from './notice';
import LogModel from './log';

const sequelize = new Sequelize(database, username, password, config);

const models = {
    User: UserModel.init(sequelize),
    Location: LocationModel.init(sequelize),
    Ad: AdModel.init(sequelize),
    App: AppModel.init(sequelize),
    Notice: NoticeModel.init(sequelize),
    Log: LogModel.init(sequelize)
}

Object.values(models)
    .filter(model => typeof model.associate === 'function')
    .forEach(model => model.associate(models));

export default {
    sequelize,
    ...models
}