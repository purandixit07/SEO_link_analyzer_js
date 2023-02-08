import url from 'node:url'


const normalizeURL = (myUrl) => {
    url.parse(myUrl)
}

module.exports = {
    normalizeURL
}