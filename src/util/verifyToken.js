import jwt from 'jsonwebtoken';
import config from '../config/jwt.json';

const verifyToken = (accessToken) => {
    const { secret, issuer } = config;
    const payload = jwt.verify(accessToken, secret, { issuer });
    return payload;
}

export default verifyToken;