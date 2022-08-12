'use strict'

const calc = require('../src/calc')

describe('times()', () => {
    test('should equal 10', () => {
        expect(calc.times(2, 5)).toBe(10)
    })

    test('should equal 6', () => {
	expect(calc.times(3,2)).toBe(6)
    })

    test('should equal 25', () => {
	expect(calc.times(5,5)).toBe(25)
    })

})

describe('spell()', () => {

    test('should return "one"', () => {
        expect(calc.spell(1)).toBe('one')
    })

    test('should return "two"', () => {
        expect(calc.spell(2)).toBe('two')
    })

    test('should return "three"', () => {
        expect(calc.spell(3)).toBe('three')
    })

    test('should return "four"', () => {
        expect(calc.spell(4)).toBe('four')
    })

    test('should return "unknown"', () => {
        expect(calc.spell(6)).toBe('unknown')
    })

})


describe('pow()', function () {
    it('should return 8', function () {
        expect(calc.pow(2, 3)).toBe(8)
    })
})

// Pending test cases:
describe('combination of multiple functions', function () {
    it('sigma(3) === factorial(3)', function() {
        expect(calc.sigma(3)).toBe(calc.factorial(3))
    })
})


describe('sigma()', function () {
    it('sigma(10) should return 55', function () {
        expect(calc.sigma(10)).toBe(55)
    })
    it('sigma(0) should return 0', function () {
        expect(calc.sigma(0)).toBe(0)
    })
})


describe('factorial()', function () {
    it('factorial(12) should return 479001600', function () {
        expect(calc.factorial(12)).toBe(479001600)
    })
    it('factorial(0) should return 1', function () {
        expect(calc.factorial(0)).toBe(1)
    })
})
