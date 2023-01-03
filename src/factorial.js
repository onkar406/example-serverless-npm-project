'use strict'

function factorial(a) {
    if (a === 0) {
        return 1
    }
    else {
        return times(a, factorial(a-1))
    }
}

module.exports = { factorial }
