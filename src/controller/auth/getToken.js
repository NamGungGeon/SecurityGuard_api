import reissueToken from '../../util/reissueToken';

const getToken = (req, res, next) => {
    const { refreshToken } = req.body;
    try {
        const accessToken = reissueToken(refreshToken);
        return res.json({ accessToken });
    } catch ({ message }) {
        return res.status(400).json({ message });
    }
}

export default getToken;