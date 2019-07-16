import model from '../../model';
import generateToken from '../../util/generateToken';
import comparePassword from '../../util/comparePassword';

const signin = async (req, res, next) => {
    const { id, password } = req.body;
    try {
        const user = await model.User.findOne({ where: { id }});
        if (!user) {
            return res.status(404).json({ message: '존재하지않는 회원입니다.' });
        }
        if (!comparePassword(password, user.password)) {
            return res.status(401).json({ message: '비밀번호가 틀렸습니다.' });
        }
        return res.json(generateToken(user.id));
    } catch (err) {
        next(err);
    }
}

export default signin;