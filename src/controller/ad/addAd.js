import model from '../../model';

const addAd = async (req, res, next) => {
    const { title, image, link } = req.body;
    try {
        const ad = await model.Ad.create({ title, image, link });
        return res.json({ ad });
    } catch (err) {
        next(err);
    }
}

export default addAd;
