const {generateInventory} = require('./fishingBoat.js');

// Filters fish inventory by monger's and chef's requirements and returns results
function mongerInventory(maxPrice) {
    // Calls generateInventory to populate inventory of caught fish
    let inventory = generateInventory();
    
    // Generates the fishing boat inventory string
    let boatMessage = "The fishing boat has caught:\n"
    for (fish of inventory) {
        boatMessage += `${fish.amount} ${fish.species}\n`
    }
    
    // Logs the inventory of the fishing boat
    console.log(boatMessage)

    let mongerMessage = "The Fishmonger has purchased:\n"
        
    let purchasedFish = [];

    // Generates the mongerInventory, updates the boatInventory, and generates the Fishmonger inventory string

    // Loops through the boatInventory
    for (let x = 0; x < inventory.length; x ++) {

        // Tracks current fish
        let fish = inventory[x]
        
        // Purchases all rare fish
        if (fish.rare) {
            purchasedFish.push({...fish})
            mongerMessage += `${fish.amount} ${fish.species}\n`
            inventory.splice(x,1)
        }
        // Purchases 10 regular fish if conditions are met
        else if (fish.amount >= 10 && fish.price < 7.50) {
            purchasedFish.push({...fish, amount: 10})
            mongerMessage += `10 ${fish.species}\n`
            fish.amount -= 10
        }
    }

    //Logs Fishmonger inventory
    console.log(mongerMessage)

    //Logs updated boatInventory
    let updatedBoatMessage = "The fishing boat now has:\n"
    for (fish of inventory) {
        updatedBoatMessage += `${fish.amount} ${fish.species}\n`
    }
    console.log(updatedBoatMessage)


    let restaurantMessage = `The chef has purchased:\n`
    let restaurantInventory = []

    // Generates the restaurant inventory, updates the monger Inventory, and generates the restaurant inventory string
    
    // Loops throught the mongerInventory
    for (let x = 0; x < purchasedFish.length; x ++) {
        // Tracks current fish
        let fish = purchasedFish[x];

        // Purchases all rare fish
        if (fish.rare) {
            restaurantInventory.push(fish);
            restaurantMessage += `${fish.amount} ${fish.species}\n`
            purchasedFish.splice(x,1);

        // Purchases half the inventory of regular fish that are cheaper or equal to the max price
        } else if (fish.price <= maxPrice) {
            let purchasedAmount = Math.ceil(fish.amount/2);
            restaurantInventory.push({...fish, amount: purchasedAmount});
            restaurantMessage += `${purchasedAmount} ${fish.species}\n`;
            fish.amount -= purchasedAmount;
        }
    }

    // Logs the restaurant inventory
    console.log(restaurantMessage)

    // Logs the updated mongerInventory
    let updatedMongerMessage = "The Fishmonger now has:\n"
    purchasedFish.map(fish => {
        updatedMongerMessage += `${fish.amount} ${fish.species}\n`
    })

    console.log(updatedMongerMessage)

    // Returns the fish purchased by the restaurant
    return restaurantInventory
};

module.exports = {
    mongerInventory
};