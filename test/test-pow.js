'use strict'

const assert = require('assert')
const calc = require('../src/calc.js')

describe('pow()', function () {
    it('should return 8', function () {
        assert.equal(calc.pow(2, 3), 8)
    })
})