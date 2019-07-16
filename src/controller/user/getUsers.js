import model from '../../model';

const getUsers = async (req, res, next) => {
    const { id } = req.query;
    try {
        const users = await model.User.findAll();
        return res.json({ users });
    } catch (err) {
        next(err);
    }
}

export default getUsers;