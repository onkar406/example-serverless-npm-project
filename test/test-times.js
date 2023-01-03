'use strict'

const assert = require('assert')
const calc = require('../src/times.js')

describe('times()', function () {
    it('should equal 10', function () {
        assert.equal(calc.times(2, 5), 10)
    })

    it('should equal 6', function () {
        assert.equal(calc.times(3, 2), 6)
    })

    it('should equal 25', function () {
        assert.equal(calc.times(5, 5), 25)
    })

})