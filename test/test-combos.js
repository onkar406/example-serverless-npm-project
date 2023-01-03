'use strict'

const assert = require('assert')
const calc = require('../src/calc.js')

describe('combination of multiple functions', function () {
    it('sigma(3) === factorial(3)', function() {
        assert.equal(calc.sigma(3), calc.factorial(3))
    })
})