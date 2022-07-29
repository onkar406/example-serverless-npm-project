'use strict'

const assert = require('assert')
const calc = require('../src/calc.js')

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

describe('pow()', function () {
    it('should return 8', function () {
        assert.equal(calc.pow(2, 3), 8)
    })
})

// Pending test cases:
describe('combination of multiple functions', function () {
    it('sigma(3) === factorial(3)', function() {
        assert.equal(calc.sigma(3), calc.factorial(3))
    })
})


describe('sigma()', function () {
    it('sigma(10) should return 55', function () {
        assert.equal(calc.sigma(10), 55)
    })
    it('sigma(0) should return 0', function () {
        assert.equal(calc.sigma(0), 0)
    })
})


describe('factorial()', function () {
    it('factorial(10) should return 3628800', function () {
        assert.equal(calc.factorial(10), 3628800)
    })
    it('factorial(0) should return 1', function () {
        assert.equal(calc.factorial(0), 1)
    })
})
