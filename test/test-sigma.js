'use strict'

const assert = require('assert')
const calc = require('../src/sigma.js')

describe('sigma()', function () {
    it('sigma(10) should return 55', function () {
        assert.equal(calc.sigma(10), 55)
    })
    it('sigma(0) should return 0', function () {
        assert.equal(calc.sigma(0), 0)
    })
})