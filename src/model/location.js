import DataTypes, { Model } from 'sequelize';

class Location extends Model {
    static init(sequelize) {
        const { STRING, GEOMETRY, INTEGER } = DataTypes;
        return super.init({
            coord: {
                type: GEOMETRY('POINT'),
                allowNull: false
            },
            level: {
                type: INTEGER,
                allowNull: false
            },
            name: {
                type: STRING,
                defaultValue: ""
            }
        }, {
            sequelize,
            modelName: 'location'
        });
    }
}

export default Location;