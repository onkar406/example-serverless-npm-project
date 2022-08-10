'use strict'

const calc = require('../src/calc')

describe('times()', () => {
    test('should equal 10', () => {
        expect(calc.times(2, 5)).toBe(10)
    })

    test('should equal 6', () => {
	expect(calc.times(3,2)).toBe(10)
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
