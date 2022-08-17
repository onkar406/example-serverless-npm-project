const t = require('tap')
t.pass('This is a test message and it is fine.')
const calc = require('../src/calc')

// times()
t.test('times()', t => {
    t.equal(calc.times(2, 5), 10)
    t.equal(calc.times(3, 2), 6)
    t.equal(calc.times(5, 5), 25)
    t.end()
})

// pow()
t.equal(calc.pow(2, 3), 8)

// sigma()
t.equal(calc.sigma(3), calc.factorial(3))
t.equal(calc.sigma(0), 0)

// factorial
t.equal(calc.factorial(10), 3628800)

// spell()
t.equal(calc.spell(2), 'two')