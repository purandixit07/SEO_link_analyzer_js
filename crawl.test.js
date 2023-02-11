const {normalizeURL, getURLsFromHTML} = require('./crawl.js')
const {test, expect} = require('@jest/globals')

// test('normalizeURL strip protocol', () => {
//     const input = 'https://blog.boot.dev/path/'
//     const actual = normalizeURL(input)
//     const expected = 'blog.boot.dev/path'
//     expect(actual).toEqual(expected)
//     })

// test('normalizeURL capitals', () => {
//     const input = 'https://blog.boot.dev/path/'
//     const actual = normalizeURL(input)
//     const expected = 'blog.boot.dev/path'
//     expect(actual).toEqual(expected)
//     })

// test('normalizeURL strip https', () => {
//     const input = 'http://BLOG.boot.dev/path/'
//     const actual = normalizeURL(input)
//     const expected = 'blog.boot.dev/path'
//     expect(actual).toEqual(expected)
//     })

test('getURLsFromHTML absolute', () => {
    const inputHTMLBody = `
    <html>
        <body>
            <a href = "https://blog.boot.dev/">
                Boot.dev blog
            </a>
        </body>
    </html>
    `
    const inputBaseURL = "https://blog.boot.dev/"
    const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL)
    const expected = ['https://blog.boot.dev/']
    expect(actual).toEqual(expected)
    })


    test('getURLsFromHTML relative', () => {
        const inputHTMLBody = `
        <html>
            <body>
                <a href = "/path/">
                    Boot.dev blog
                </a>
            </body>
        </html>
        `
        const inputBaseURL = "https://blog.boot.dev"
        const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL)
        const expected = ['https://blog.boot.dev/path/']
        expect(actual).toEqual(expected)
        })