import model from '../../model';
import generateToken from '../../util/generateToken';
import hashPassword from '../../util/hashPassword';

const signup = async (req, res, next) => {
    const { id, name, password } = req.body;
    try {
        const user = await model.User.create({ id, name, password: hashPassword(password) });
        return res.json(generateToken(user.id));
    } catch (err) {
        next(err);
    }
}

export default signup;