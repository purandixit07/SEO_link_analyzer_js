const {JSDOM} = require('jsdom')


const getURLsFromHTML = (htmlBody, baseURL) => {
    const urls = []
    const dom = new JSDOM(htmlBody)
    const linkElements = dom.window.document.querySelectorAll('a')
    for (linkElement of linkElements) {
        if (linkElement.href.slice(0,1) === '/') {
            // relative
            urls.push(`${baseURL}${linkElement.href}`)
        } else {
            urls.push(linkElement.href)
        }
        // console.log(linkElement.href)
    }
    return urls
}

const normalizeURL = (urlString) => {
    const urlObj = new URL(urlString)
    const hostPath = `${urlObj.hostname}${urlObj.pathname}`
    if (hostPath.length > 0 && hostPath.slice(-1) === '/') {
        return hostPath.slice(0, -1)
    }
    return hostPath
    }






    
module.exports = {
    normalizeURL, getURLsFromHTML
}