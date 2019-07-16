import model from '../../model';

const addNotice = async (req, res, next) => {
    const { title, content } = req.body;
    try {
        const notice = await model.Notice.create({ title, content });
        return res.json({ notice });
    } catch (err) {
        next(err);
    }
}

export default addNotice;