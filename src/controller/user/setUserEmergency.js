const setUserEmergency = async (req, res, next) => {
    const { user } = req;
    try {
        await user.update({ isEmergency: true });
        return res.status(204).json();
    } catch (err) {
        next(err);
    }
}

export default setUserEmergency;