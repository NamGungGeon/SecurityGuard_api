import model from '../../model';

const deleteNotice = async (req, res, next) => {
    const { id } = req.params;
    try {
        const notice = await model.Notice.destroy({
            where: { id }
        });
        return res.json({ notice });
    } catch (err) {
        next(err);
    }
}

export default deleteNotice