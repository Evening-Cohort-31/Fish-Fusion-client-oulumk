const {regularInventory, specialInventory} = require("./database.js")
const {randomNumberGenerator} = require("./rng.js");

// Generates a randomized inventory of caught fish
const catchFish = () => {
    const diceRolls = 4;
    const diceSize = 4
    // Returns the result of rolling x number of y sided dice. 
    const rollTheDice = (diceRolls, diceSize) => {
        let total = 0
        for (let x = 0; x < diceRolls; x ++) {
            total += randomNumberGenerator(diceSize)
        }
        return total
}
    // Determines the number of species needed to be caught by the fishing boat
    let numberOfSpeciesToCatch = rollTheDice(diceRolls, diceSize)

    // Flag for if special fish can be caught
    let gotLucky = false;

    // Allows for an 8% chance of catching a special fish
    if (randomNumberGenerator(25) <= 2) {
        gotLucky = true
    }

    // Flags whether a special fish has already been caught
    let caughtSpecial = false;
    
    // Array of caught fish
    let caughtFish = []

    // Updated caughtFish array with a random selection of fish species. 
    // Loops until the the correct number of species is caught 
    while (numberOfSpeciesToCatch > 0) {
        let selectionInventory
        
        // Assigns which inventory to catch from
        gotLucky && !caughtSpecial 
            ? (selectionInventory = specialInventory, caughtSpecial = true)
            : selectionInventory = regularInventory

        // Randomly selects a species from the selected inventory to be caught
        let inventoryLength = selectionInventory.length;
        let randomIndex = randomNumberGenerator(inventoryLength) - 1
        let thisCatch = selectionInventory[randomIndex]

        // Removes the caught fish from the pool of remaining fish
        selectionInventory.splice(selectionInventory.indexOf(thisCatch),1)

        // Updates the loop condition
        numberOfSpeciesToCatch -= 1
        // Adds the caught fish to the inventory
        caughtFish.push(thisCatch)
    }

    return caughtFish
}

module.exports = {
    catchFish
}