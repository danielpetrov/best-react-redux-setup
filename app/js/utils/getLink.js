const getLink = key => {
    switch (key) {
        case ``:
        case `home`:
            return `/${key}`
        default:
            return `badLink`
    }
}

export default getLink
