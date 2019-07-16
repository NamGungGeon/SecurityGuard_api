import model from '../../model';

const getLocation = async (req, res, next) => {
    const { id } = req.params;
    try {
        const location = await model.Location.findOne({
            where: { id }
        });
        return res.json({ location });
    } catch (err) {
        next(err);
    }
}

export default getLocation;