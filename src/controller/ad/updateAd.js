import model from '../../model';

const updateAd = async (req, res, next) => {
    const { id } = req.params;
    const { title, image, link } = req.body;
    try {
        const ad = await model.Ad.update({ title, image, link }, {
            where: { id }
        });
        return res.json({ ad });
    } catch (err) {
        next(err);
    }
}

export default updateAd;