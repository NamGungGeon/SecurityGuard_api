const identify = (req, res, next) => {
    const { user } = req;
    const { id } = req.params;
    if (user.id !== id) {
        return res.status(403).json({ message: '본인인증에 실패하였습니다' });
    }
    next();
}

export default identify;