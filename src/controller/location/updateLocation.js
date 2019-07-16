import model from '../../model';

const updateLocation = async (req, res, next) => {
    const { lat, lng, level, name } = req.body;
    const { id } = req.params;
    try {
        const coord = { type: 'Point', coordinates: [lng, lat]};
        const location = await model.Location.update({ level, name, coord }, {
            where: { id }
        });
        return res.json({ location });
    } catch (err) {
        next(err);
    }
}

export default updateLocation;