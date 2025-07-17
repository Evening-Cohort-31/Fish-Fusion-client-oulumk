const {boatInventory} = require('./fishingBoat.js');

// Filters fish inventory by monger's and chef's requirements and returns results
function mongerInventory(maxPrice) {
    let inventory = boatInventory();

    let boatMessage = "The fishing boat has caught:\n"
    for (fish of inventory) {
        boatMessage += `${fish.amount} ${fish.species}\n`
    }

    console.log(boatMessage)

    let mongerMessage = "The Fishmonger has purchased:\n"
    let purchasedFish = [];

    purchasedFish = inventory.flatMap(fish => 
        fish.amount >= 10 && fish.price < 7.50 ? (fish.amount -= 10, mongerMessage += `10 ${fish.species}\n`,{...fish, amount: 10}) : []
    )

    console.log(mongerMessage)
    let updatedBoatMessage = "The fishing boat now has:\n"
    for (fish of inventory) {
        updatedBoatMessage += `${fish.amount} ${fish.species}\n`
    }
    console.log(updatedBoatMessage)

    // for (let fish of inventory) {

    //     if (fish.amount >= 10 && fish.price < 7.50) {
    //         fish.amount = 10
    //         purchasedFish.push(
    //             fish
    //         );
    //     }
    // }


    let restaurantMessage = `The chef has purchased:\n`
    let restaurantInventory = []
    // for (let fish of purchasedFish) {
    //     if (fish.price <= maxPrice) {
    //         fish.amount = 5
    //         restaurantInventory.push(
    //             fish
    //         )
    //     }
    // }

    restaurantInventory = purchasedFish.flatMap(fish =>
        fish.price <= maxPrice ? (fish.amount -= Math.ceil(fish.amount/2), restaurantMessage += `${fish.amount} ${fish.species}\n`, {...fish, amount: Math.ceil(fish.amount/2)}) : []
    )

    console.log(restaurantMessage)

    let updatedMongerMessage = "The Fishmonger now has:\n"
    purchasedFish.map(fish => {
        updatedMongerMessage += `${fish.amount} ${fish.species}\n`
    })

    console.log(updatedMongerMessage)

    return restaurantInventory
};

module.exports = {
    mongerInventory
};