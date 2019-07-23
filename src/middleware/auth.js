import model from '../model';
import verifyToken from '../util/verifyToken';

const auth = async (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(400).json({ message: 'Authorization header required.' });
    }
    const token = authorization.split(' ')[1];
    try {
        const payload = verifyToken(token);
        const user = await model.User.findOne({ 
            where: { id: payload.id } 
        });
        if (!user) {
            return res.status(404).json({ message: '존재하지 않는 유저입니다. '});
        }
        req.user = user;
        next();
    } catch ({ message }) {
        return res.status(400).json({ message });
    }
}

export default auth;