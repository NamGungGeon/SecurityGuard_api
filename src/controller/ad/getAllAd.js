import model from '../../model';
import getPageOptions from '../../util/getPageOptions';

const getAllAd = async (req, res, next) => {
    const pageOptions = getPageOptions(req.query);
    try {
        const ads = await model.Ad.findAll({ ...pageOptions });
        return res.json({ ads });
    } catch (err) {
        next(err);
    }
}

export default getAllAd;