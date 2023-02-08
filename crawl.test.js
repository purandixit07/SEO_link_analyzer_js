const {test, expect} = require('@jest/globals')

const {normalizeURL} = require('./crawl')

test('normalize the url', () => {
    expect(normalizeURL('https://wagsLane.Dev/path').toBe(wagslane.dev/path));
    })