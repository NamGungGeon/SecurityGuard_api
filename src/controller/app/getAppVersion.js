import model from '../../model';

const getAppVersion = async (req, res, next) => {
    const rows = await model.App.findAll();
    const app = rows.length > 0 
        ? rows[0] 
        : { stable: '0.0.0', latest: '0.0.0' };
    return res.json(app);
}

export default getAppVersion;