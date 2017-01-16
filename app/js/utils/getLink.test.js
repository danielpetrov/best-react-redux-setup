import test from 'tape'
import getLink from './getLink'

test('getLink function should return expected result when proper link is passed', t => {
    const urlPrefix = '/'

    t.equal(getLink(''), `${urlPrefix}`, 'getLink from empty string url')
    t.equal(getLink('home'), `${urlPrefix}home`, 'getLink from home url')

    t.end()
})

test('getLink function should return badLink when non-proper link is passed', t => {
    t.equal(getLink('otherLink'), 'badLink', 'getLink from nonexisting url')
    t.end()
})

test('getLink function should return badLink when non-proper link is passed', t => {
    t.equal(getLink(undefined), 'badLink', 'getLink from undefined url')
    t.end()
})

test('getLink function should return badLink when non-proper link is passed', t => {
    t.equal(getLink(null), 'badLink', 'getLink from null url')
    t.end()
})
