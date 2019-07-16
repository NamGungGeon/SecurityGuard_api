const setUserCurrentLocation = async (req, res, next) => {
    const { user } = req;
    const { lat, lng } = req.body;
    try {
        const coord = { type: 'Point', coordinates: [lat, lng] };
        await user.addLog({ coord });
        return res.status(204).json();
    } catch (err) {
        next(err);
    }
}

export default setUserCurrentLocation;