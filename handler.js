const calc = require('./src/calc.js')

module.exports.hello = async (event, context) => {
    let body = []
    if (event.body) {
	body = JSON.parse(event.body)
    }

    const name = body.name || 'World'

    return {
	statusCode: 200,
	body: `Hello, ${name}!`,
    };
};

module.exports.bye = async (event, context) => {
    let body = []

    if (event.body) {
	body = JSON.parse(event.body)
    }

    const name = body.name || 'for now'

    return {
	statusCode: 200,
	body: `Bye, ${name}!`,
    }
}


module.exports.sigma = async (event, context) => {
    let body = []

    if (event.body) {
	body = JSON.parse(event.body)
    }

    const number = body.number || 10
    sigmaValue = calc.sigma(number)

    return {
        statusCode: 200,
        body: `${sigmaValue}`
    }
}

module.exports.factorial = async (event, context) => {
    let body = []

    if (event.body) {
	body = JSON.parse(event.body)
    }

    const number = body.number || 10
    factorialValue = calc.factorial(number)

    return {
        statusCode: 200,
        body: `${factorialValue}`
    }
}
