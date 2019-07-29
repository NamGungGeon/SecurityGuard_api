import model from '../../model';

const deleteAllAd = async (req, res, next) => {
    try {
        await model.Ad.destroy();
        return res.status(204).json();
    } catch (err) {
        next(err);
    }
}

export default deleteAllAd;