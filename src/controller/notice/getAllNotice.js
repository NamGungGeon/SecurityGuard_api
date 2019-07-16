import model from '../../model';

const getAllNotice = async (req, res, next) => {
    const { limit, offset } = req.query;
    try {
        const notices = await model.Notice.findAll();
        return res.json({ notices });
    } catch (err) {
        next(err);
    }
}

export default getAllNotice;