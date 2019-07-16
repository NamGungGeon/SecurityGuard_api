import model from '../../model';

const getNotice = async (req, res, next) => {
    const { id } = req.params;
    try {
        const notice = await model.Notice.findOne({
            where: { id }
        });
        return res.json({ notice });
    } catch (err) {
        next(err);
    }
}

export default getNotice;