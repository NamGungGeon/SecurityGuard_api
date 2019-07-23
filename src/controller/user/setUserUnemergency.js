const setUserUnemergency = async (req, res, next) => {
    const { user } = req;
    try {
        await user.update({ isEmergency: false });
        return res.status(204).json();
    } catch (err) {
        next(err);
    }
}

export default setUserUnemergency;