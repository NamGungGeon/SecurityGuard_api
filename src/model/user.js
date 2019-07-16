import DataTypes, { Model } from 'sequelize';

class User extends Model {
    static init(sequelize) {
        const { STRING, ENUM, INTEGER, BOOLEAN } = DataTypes;
        return super.init({
            id: {
                type: STRING,
                primaryKey: true
            },
            password: {
                type: STRING
            },
            role: {
                type: ENUM,
                values: ['user','admin'],
                defaultValue: 'user'
            },
            cash: {
                type: INTEGER,
                defaultValue: 0
            },
            isEmergency: {
                type: BOOLEAN,
                defaultValue: false
            }
        }, {
            sequelize,
            modelName: 'user'
        });
    }
    static associate(models) {
        const { Log } = models;
        this.hasMany(Log);
    }
}

export default User;