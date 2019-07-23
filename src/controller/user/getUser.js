import model from '../../model';

const getUser = async (req, res, next) => {
    const { id } = req.params;
    try {
        const user = await model.User.findOne({ 
            where: { id }
        });
        return res.json({ user });
    } catch ({ message }) {
        next(err);
    }
}

export default getUser;