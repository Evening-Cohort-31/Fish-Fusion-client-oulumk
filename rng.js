// Generates a random number between 1 and the provided number.
const randomNumberGenerator = (maxNumber) => {
    return Math.floor((Math.random() * maxNumber) + 1)
}

module.exports = {randomNumberGenerator}