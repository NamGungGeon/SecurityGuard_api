import DataTyeps, { Model } from 'sequelize';

class App extends Model {
    static init(sequelize) {
        const { STRING } = DataTyeps;
        return super.init({
            stable: {
                type: STRING,
                allowNull: false
            },
            latest: {
                type: STRING,
                allowNull: false
            }
        }, {
            sequelize,
            modelName: 'app',
            timestamps: false
        });
    }
}

export default App;