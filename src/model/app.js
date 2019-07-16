import DataTyeps, { Model } from 'sequelize';

class App extends Model {
    static init(sequelize) {
        const { STRING } = DataTyeps;
        return super.init({
            minVersion: {
                type: STRING,
                defaultValue: 0
            },
            currentVersion: {
                type: STRING,
                defaultValue: 0
            }
        }, {
            sequelize,
            modelName: 'app',
            timestamps: false
        });
    }
}

export default App;