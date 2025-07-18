const {randomNumberGenerator} = require("./rng.js");

// array of fish objects
let inventory = [
    { id: 1, species: "Halibut", weight: 6, price: 3.55, amount: 30, rare: false },
    { id: 2, species: "Mackerel", weight: 3, price: 4.10, amount: 48, rare: false },
    { id: 3, species: "Salmon", weight: 5, price: 3.05, amount: 25, rare: false },
    { id: 4, species: "Walleye", weight: 2, price: 9.45, amount: 19, rare: false },
    { id: 5, species: "Sunfish", weight: 25, price: 5.18, amount: 1, rare: false },
    { id: 6, species: "Orange Roughy", weight: 4, price: 6.95, amount: 37, rare: false },
    { id: 7, species: "Tuna", weight: 18, price: 8.66, amount: 5, rare: false },
    { id: 8, species: "Puffer", weight: 2, price: 9.84, amount: 52, rare: false },
    { id: 9, species: "Cod", weight: 7, price: 4.25, amount: 22, rare: false },
    { id: 10, species: "Snapper", weight: 4, price: 7.30, amount: 15, rare: false },
    { id: 11, species: "Flounder", weight: 3, price: 5.85, amount: 28, rare: false },
    { id: 12, species: "Swordfish", weight: 45, price: 12.50, amount: 3, rare: false },
    { id: 13, species: "Mahi-Mahi", weight: 8, price: 6.75, amount: 12, rare: false },
    { id: 14, species: "Trout", weight: 2, price: 5.95, amount: 35, rare: false },
    { id: 15, species: "Sea Bass", weight: 6, price: 8.20, amount: 18, rare: false },
    { id: 16, species: "Grouper", weight: 12, price: 9.85, amount: 8, rare: false }
]

// array of rare and exotic fish objects
let specialInventory = [
    { id: 17, species: "Bluefin Tuna", weight: 120, price: 45.00, amount: 2, rare: true },
    { id: 18, species: "King Salmon", weight: 35, price: 25.75, amount: 3, rare: true },
    { id: 19, species: "Yellowfin Tuna", weight: 80, price: 32.50, amount: 1, rare: true },
    { id: 20, species: "Chilean Sea Bass", weight: 15, price: 18.90, amount: 4, rare: true },
    { id: 21, species: "Wild Striped Bass", weight: 22, price: 21.25, amount: 2, rare: true },
    { id: 22, species: "Monkfish", weight: 10, price: 15.60, amount: 5, rare: true }
]

// Generates a randomized inventory of caught fish
const generateInventory = () => {
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
            : selectionInventory = inventory

        // Randomly selects a species from the selected inventory to be caught
        let inventoryLength = selectionInventory.length;
        let randomIndex = randomNumberGenerator(inventoryLength) - 1
        let thisCatch = inventory[randomIndex]

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
    generateInventory
}