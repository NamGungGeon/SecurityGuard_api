const generatePoint = (lng, lat) => {
    if (Math.abs(parseFloat(lng)) >= 180) {
        throw Error('경도(lng)의 범위는 -180 ~ 180 입니다.');
    }
    if (Math.abs(parseFloat(lat)) >= 90) {
        throw Error('위도(lat)의 범위는 -90 ~ 90 입니다.');
    }
    const point = { type: 'Point', coordinates: [parseFloat(lng), parseFloat(lat)] }
    return point;
}

export default generatePoint;