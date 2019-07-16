const isAdmin = (req, res, next) => {
    const { user } = req;
    if (user.role !== 'admin') {
        return res.status(403).json({ message: '어드민 권한이 필요합니다. '});
    }
    next();
}

export default isAdmin;