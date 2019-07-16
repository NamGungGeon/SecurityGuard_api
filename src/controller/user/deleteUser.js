import model from '../../model';

const deleteUser = async (req, res, next) => {
    const { id } = req.params;
    try {
        await model.User.destroy({ where: { id } });
        return res.status(204).json();
    } catch (err) {
        next(err);
    }
}

export default deleteUser;