'use strict'


function times(a, b) {
    return a * b
}

function spell(input) {
    switch (input) {
        case 1:
            return 'one'

        case 2:
            return 'two'

        case 3:
            return 'three'

        case 4:
            return 'four'

        case 5:
            return 'five'

        default:
            return 'unknown'
    }
}

function pow(num, pow) {
    return num ** pow
}

function sigma(a) {
    if (a == 0) {
        return 0
    }
    else {
        return times(a, a+1)/2
    }
}

function factorial(a) {
    if (a === 0) {
        return 1
    }
    else {
        return times(a, factorial(a-1))
    }
}

module.exports = { times, spell, pow, sigma, factorial }
