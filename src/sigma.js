'use strict'

const calc = require('../src/times.js')

function sigma(a) {
    if (a == 0) {
        return 0
    }
    else {
        return calc.times(a, a + 1) / 2
    }
}

module.exports = { sigma }
