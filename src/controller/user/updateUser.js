import model from '../../model';
import hashPassword from '../../util/hashPassword';

const updateUser = async (req, res, next) => {
    const { id } = req.params;
    const { email, password } = req.body;
    try {
        await model.User.update({ email, password: hashPassword(password) }, { where: { id } });
        return res.status(204).json();
    } catch (err) {
        next(err);
    }
}

export default updateUser;