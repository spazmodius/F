'use strict'

const apply = x => f => f(x)

const compose = (...fns) => arg => fns.reduceRight((value, fn) => fn(value), arg)

const constant = x => () => x

const identity = _ => _

const noop = () => {}

const pipe = (...fns) => arg => fns.reduce((value, fn) => fn(value), arg)

module.exports = {
	apply,
	compose,
	constant,
	identity,
	noop,
	pipe,
}
