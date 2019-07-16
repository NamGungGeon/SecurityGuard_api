import model from '../../model';

const getAllAd = async (req, res, next) => {
    const { limit, offset } = req.query;
    try {
        const ads = await model.Ad.findAll();
        return res.json({ ads });
    } catch (err) {
        next(err);
    }
}

export default getAllAd;