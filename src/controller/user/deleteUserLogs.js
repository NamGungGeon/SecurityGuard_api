const deleteUserLogs = async (req, res, next) => {
    const { user } = req;
    try {
        await user.setLogs([]);
        res.status(204).json();
    } catch (err) {
        next(err);
    }
}

export default deleteUserLogs;