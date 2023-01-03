'use strict'

const assert = require('assert')
const factorial = require('../src/factorial.js')
const sigma = require('../src/sigma.js')

describe('combination of multiple functions', function () {
    it('sigma(3) === factorial(3)', function() {
        assert.equal(sigma.sigma(3), factorial.factorial(3))
    })
})