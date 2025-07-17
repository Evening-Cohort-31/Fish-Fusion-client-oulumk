const randomNumberGenerator = (maxNumber) => {
    return Math.floor((Math.random() * maxNumber) + 1)
}

module.exports = {randomNumberGenerator}