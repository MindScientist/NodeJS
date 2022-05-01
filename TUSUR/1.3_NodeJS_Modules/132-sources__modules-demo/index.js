const data = require('./users.json')
const { stringify: stringifyUser, capitalize } = require('./users.js')

data.forEach(user => {
	const formattedUserStr = stringifyUser(user)
	console.log(formattedUserStr)
	console.log(capitalize(user.gender))
})
