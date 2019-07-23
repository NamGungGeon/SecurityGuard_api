import model from '../../model';
import sequelize, { Op } from 'sequelize';
import getPageOptions from '../../util/getPageOptions';

const MAX_DISTANCE = 20040000; //지구의 둘레는 약 40075000, (0,0) 에서 어느 지점을 찍어도 20040000 거리 내에 있다.

const checkLngLat = (lng, lat) => {
    if (Math.abs(parseFloat(lng)) > 180) {
        throw Error('경도(lng)의 범위는 -180 ~ 180 입니다.');
    }
    if (Math.abs(parseFloat(lat)) > 90) {
        throw Error('위도(lat)의 범위는 -90 ~ 90 입니다.');
    }
}

const getAllLocation = async (req, res, next) => {
    const { lat=0, lng=0, distance=MAX_DISTANCE } = req.query;
    const pageOptions = getPageOptions(req.query);

    const location = sequelize.literal(`ST_GeomFromText('POINT(${parseFloat(lng)} ${parseFloat(lat)})')`);
    const dist = sequelize.fn('ST_Distance_Sphere', sequelize.literal('coord'), location);

    try {
        checkLngLat(lng, lat);
        const locations = await model.Location.findAll({
            attributes: {
                include: [ [dist, 'distance'] ]
            },
            order: [[sequelize.literal('distance'), 'ASC']],
            where: sequelize.where(dist, { [Op.lte]: distance }),
            ...pageOptions
        });
        return res.json({ locations });
    } catch (err) {
        next(err);
    }
}

export default getAllLocation;