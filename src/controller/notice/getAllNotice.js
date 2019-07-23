import model from '../../model';
import getPageOptions from '../../util/getPageOptions';

const getAllNotice = async (req, res, next) => {
    const pageOptions = getPageOptions(req.query);
    try {
        const notices = await model.Notice.findAll({ ...pageOptions });
        return res.json({ notices });
    } catch (err) {
        next(err);
    }
}

export default getAllNotice;