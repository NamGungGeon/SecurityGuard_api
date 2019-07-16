import model from '../../model';

const deleteLocation = async (req, res, next) => {
    const { id } = req.params;
    try {
        const location = await model.Location.destroy({
            where: { id }
        });
        return res.json({ location });
    } catch (err) {
        next(err);
    }
}

export default deleteLocation;