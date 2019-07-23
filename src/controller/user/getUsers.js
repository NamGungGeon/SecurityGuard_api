import model from '../../model';
import getPageOptions from '../../util/getPageOptions';

const getUsers = async (req, res, next) => {
    const pageOptions = getPageOptions(req.query);
    try {
        const users = await model.User.findAll({
            ...pageOptions
        });
        return res.json({ users });
    } catch (err) {
        next(err);
    }
}

export default getUsers;