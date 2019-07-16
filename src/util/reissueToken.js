import jwt from 'jsonwebtoken';
import config from '../config/jwt.json';

const reissueToken = (refreshToken) => {
    const { secret, issuer, expire } = config;
    const { id, type } = jwt.verify(refreshToken, secret, { issuer });
    if (type !== 'refresh') {
        throw new Error('Invalid refresh token');
    }
    const accessToken = jwt.sign({ id, type: 'access' }, secret, { issuer, expiresIn: expire.access });
    return accessToken;
} 

export default reissueToken;