import model from '../../model';

const updateAppVersion = async (req, res, next) => {
    const { stable, latest } = req.body;
    try {
        const rows = await model.App.findAll();
        if (rows.length === 0) {
            const app = await model.App.create({ stable, latest });
            return res.json(app);
        } else {
            const app = await rows[0].update({ stable, latest });
            return res.json(app);
        }
    } catch (err) {
        next(err);
    }
}

export default updateAppVersion;