const getPageOptions = (req) => {
    const { offset, limit } = req;
    const pageOptions = {
        offset: offset?Number(offset):0,
        limit: limit?Number(limit):null
    }
    return pageOptions;
}

export default getPageOptions;