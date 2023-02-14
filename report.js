function printReport(pages) {
    console.log("============")
    console.log("Start Report")
    console.log("============")

    const sortedPages = sortPages(pages)
    for(const sortPage of sortedPages) {
        const url = sortPage[0]
        const hits = sortPage[1]
        console.log(`Found ${hits} links of page: ${url}`)
    }
    console.log("============")
    console.log("End of Report")
    console.log("============")
}

function sortPages(pages) {
    const pagesArr = Object.entries(pages)
    pagesArr.sort((a,b) => {
        aHits = a[1]
        bHits = b[1]
        return bHits - aHits
    })
    return pagesArr

}

module.exports = {
    sortPages, 
    printReport
}