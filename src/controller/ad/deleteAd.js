import model from '../../model';

const deleteAd = async (req, res, next) => {
    const { id } = req.params;
    try {
        const ad = await model.Ad.destroy({
            where: { id }
        });
        return res.json({ ad });
    } catch (err) {
        next(err);
    }
}

export default deleteAd;