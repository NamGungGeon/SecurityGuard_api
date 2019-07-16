import model from '../model';

const getUser = async (id) => {
    const user = await model.User.findOne({
        where: { id }
    });
    return user;
}

export default getUser;