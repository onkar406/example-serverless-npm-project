'use strict'

const calc = require('../src/times.js')

function factorial(a) {
    if (a === 0) {
        return 1
    }
    else {
        return calc.times(a, factorial(a - 1))
    }
}

module.exports = { factorial }
