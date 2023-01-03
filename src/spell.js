'use strict'

function spell(input) {
    switch (input) {
        case 0:
            return 'zero'

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

module.exports = { spell }
