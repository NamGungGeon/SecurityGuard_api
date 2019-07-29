import model from '../../model';

const deleteAllNotice = async (req, res, next) => {
    try {
        await model.Notice.destroy();
        return res.status(204).json();
    } catch (err) {
        next(err);
    }
}

export default deleteAllNotice;