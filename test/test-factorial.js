'use strict'

const assert = require('assert')
const calc = require('../src/calc.js')

describe('factorial()', function () {
    it('factorial(10) should return 3628800', function () {
        assert.equal(calc.factorial(10), 3628800)
    })
    it('factorial(0) should return 1', function () {
        assert.equal(calc.factorial(0), 1)
    })
})