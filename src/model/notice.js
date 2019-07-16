import DataTypes, { Model } from 'sequelize';

class Notice extends Model {
    static init(sequelize) {
        const { STRING } = DataTypes;
        return super.init({
            title: {
                type: STRING
            },
            content: {
                type: STRING,
                allowNull: false
            }
        }, {
            sequelize,
            modelName: 'notice'
        });
    }
}

export default Notice;