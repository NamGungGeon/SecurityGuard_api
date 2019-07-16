const getUserLogs = async (req, res, next) => {
    const { user } = req;
    try {
        const logs = await user.getLogs();
        return res.json({ logs });
    } catch (err) {
        next(err);
    }
}

export default getUserLogs;