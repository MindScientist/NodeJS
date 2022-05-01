function sum() {
    const args = Array.from(arguments)
    return args.reduce((sum, arg) => {
        return sum + arg;
    }, 0)
}

function mul() {
    const args = Array.from(arguments)
    return args.reduce((sum, arg) => {
        return sum * arg;
    }, 1)
}

function avg () {
    const args = Array.from(arguments)
    return sum(...args) / args.length
}

module.exports = {
    sum,
    mul,
    avg,
}