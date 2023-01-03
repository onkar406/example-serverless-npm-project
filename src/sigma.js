'use strict'

function sigma(a) {
    if (a == 0) {
        return 0
    }
    else {
        return times(a, a+1)/2
    }
}

module.exports = { sigma }
