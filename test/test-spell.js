'use strict'

const assert = require('assert')
const calc = require('../src/calc.js')

describe('spell()', function () {

    it('should return "one"', function () {
        assert.equal(calc.spell(1), 'one')
    })

    it('should return "two"', function () {
        assert.equal(calc.spell(2), 'two')
    })

    it('should return "three"', function () {
        assert.equal(calc.spell(3), 'three')
    })

    it('should return "four"', function () {
        assert.equal(calc.spell(4), 'four')
    })

    it('should return "unknown"', function () {
        assert.equal(calc.spell(6), 'unknown')
    })

})