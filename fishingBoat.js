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

const generateInventory = () => {
    const diceRolls = 4;
    const diceSize = 4
    const rollTheDice = (diceRolls, diceSize) => {
        let total = 0
        for (let x = 0; x < diceRolls; x ++) {
            total += randomNumberGenerator(diceSize)
        }
        return total
}
    let numberOfSpeciesToCatch = rollTheDice(diceRolls, diceSize)
    console.log(`Number to catch: ${numberOfSpeciesToCatch}`)

    let gotLucky = false;
    if (randomNumberGenerator(25) <= 2) {
        gotLucky = true
    }

    console.log(`Got luckY? ${gotLucky}`)
    let caughtSpecial = false;

    let caughtFish = []

    while (numberOfSpeciesToCatch > 0) {
        let inventoryLength = 0
        let randomIndex = 0
        let thisCatch
        if (gotLucky && !caughtSpecial) {
            inventoryLength = specialInventory.length
            randomIndex = randomNumberGenerator(inventoryLength) - 1
            thisCatch = specialInventory[randomIndex]   
            specialInventory = specialInventory.filter(fish => {
                specialInventory.indexOf(fish) !== randomIndex
            })   
            caughtSpecial = true      
        } else {
            inventoryLength = inventory.length
            randomIndex = randomNumberGenerator(inventoryLength) - 1
            thisCatch = inventory[randomIndex]
            inventory = inventory.filter(fish => {
                return inventory.indexOf(fish) !== randomIndex
            })
        }
        numberOfSpeciesToCatch -= 1
        caughtFish.push(thisCatch)
    }

    return caughtFish
}

module.exports = {
    generateInventory
}