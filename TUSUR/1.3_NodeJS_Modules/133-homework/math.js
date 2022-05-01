/*
 * Домашнее задание: реализуйте функции sum, mul и avg
 */
function sum (...args) { 
	/* возвращает сумму аргументов */ 
	let sum = 0;
	for (let arg of args) sum += arg;
	return sum;
}

function mul (...args) {
	/* возвращает произведение аргументов */
	let multiple = 1;
	for (let arg of args) multiple *= arg;
	return multiple;
}

function avg (...args) {
	/* возвращает среднее арифметическое аргументов */			
	let sum = 0;
	for (let arg of args) sum += arg;
	return args.length > 0 ? sum / args.length : NaN;		
}

module.exports = {
	sum: sum,
	mul: mul,
	avg: avg
}