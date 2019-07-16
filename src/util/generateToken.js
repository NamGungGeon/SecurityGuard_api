import jwt from 'jsonwebtoken';
import config from '../config/jwt.json';

const generateToken = (userId) => {
    const { secret, expire, issuer } = config;
    const accessToken = jwt.sign({ id: userId, type: 'access' }, secret, { expiresIn: expire.access, issuer });
    const refreshToken = jwt.sign({ id: userId, type: 'refresh' }, secret, { expiresIn: expire.refresh, issuer });
    return { accessToken, refreshToken }
}

export default generateToken