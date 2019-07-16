import DataTypes, { Model } from 'sequelize';

class advertisement extends Model {
    static init(sequelize) {
        const { STRING } = DataTypes;
        return super.init({
            title: {
                type: STRING,
                allowNull: false
            },
            image: {
                type: STRING,
                allowNull: false
            },
            link: {
                type: STRING,
                allowNull: false
            }
        }, {
            sequelize,
            timestamps: false,
            modelName: 'advertisement'
        });
    }
}

export default advertisement;