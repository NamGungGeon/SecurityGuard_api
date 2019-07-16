import model from '../../model';

const getAd = async (req, res, next) => {
    const { id } = req.params;
    try {
        const ad = await model.Ad.findOne({
            where: { id }
        });
        return res.json({ ad });
    } catch (err) {
        next(err);
    }
}

export default getAd;