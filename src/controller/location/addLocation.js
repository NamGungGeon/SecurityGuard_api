import model from '../../model';
import getPoint from '../../util/getPoint'

const addLocation = async (req, res, next) => {
    const { lat, lng, level, name } = req.body;
    try {
        const coord = getPoint(lng, lat);
        const location = await model.Location.create({ coord, level, name });
        return res.json({ location });
    } catch (err) {
        next(err);
    }
}

export default addLocation;