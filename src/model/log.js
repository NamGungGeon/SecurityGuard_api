import DataTypes, { Model } from 'sequelize';

class Log extends Model {
    static init(sequelize) {
        const { GEOMETRY } = DataTypes;
        return super.init({
            coord: {
                type: GEOMETRY('POINT'),
                allowNull: false
            }
        }, {
            sequelize,
            modelName: 'log'
        });
    }
    static associate(models) {
        const { User } = models;
        this.belongsTo(User);
    }
}

export default Log;