import model from '../../model';

const updateNotice = async (req, res, next) => {
    const { title, content } = req.body;
    const { id } = req.params;
    try {
        const notice = await model.Notice.update({ title, content }, {
            where: { id }
        });
        return res.json({ notice })
    } catch (err) {
        next(err);
    }
}

export default updateNotice;