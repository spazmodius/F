'use strict'

const apply = x => f => f(x)

const compose = (...fns) => arg => fns.reduceRight((value, fn) => fn(value), arg)

compose.a = (...fns) => async value => {
	let i = fns.length
	while (i > 0) {
		const fn = fns[--i]
		value = fn(await value)
	}
	return value
}

const constant = x => () => x

const identity = _ => _

const noop = () => {}

const pipe = (...fns) => arg => fns.reduce((value, fn) => fn(value), arg)

pipe.a = (...fns) => async value => {
	for (const fn of fns)
		value = fn(await value)
	return value
}

module.exports = {
	apply,
	compose,
	constant,
	identity,
	noop,
	pipe,
}
