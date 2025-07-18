const {generateInventory} = require('./fishingBoat.js');

// Filters fish inventory by monger's and chef's requirements and returns results
function mongerInventory(maxPrice) {
    let inventory = generateInventory();

    let boatMessage = "The fishing boat has caught:\n"
    for (fish of inventory) {
        boatMessage += `${fish.amount} ${fish.species}\n`
    }

    console.log(boatMessage)

    let mongerMessage = "The Fishmonger has purchased:\n"
    let purchasedFish = [];

    for (let x = 0; x < inventory.length; x ++) {
        let fish = inventory[x]
        if (fish.rare) {
            purchasedFish.push({...fish})
            mongerMessage += `${fish.amount} ${fish.species}\n`
            inventory.splice(x,1)
        }
        else if (fish.amount >= 10 && fish.price < 7.50) {
            purchasedFish.push({...fish, amount: 10})
            mongerMessage += `10 ${fish.species}\n`
            fish.amount -= 10
        }
    }
    // purchasedFish = inventory.flatMap(fish => 
    //     fish.rare || (fish.amount >= 10 && fish.price) < 7.50 ? (fish.amount -= 10, mongerMessage += `10 ${fish.species}\n`,{...fish, amount: 10}) : []
    // )

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


    for (let x = 0; x < purchasedFish.length; x ++) {
        let fish = purchasedFish[x];
        if (fish.rare) {
            restaurantInventory.push(fish);
            restaurantMessage += `${fish.amount} ${fish.species}\n`
            purchasedFish.splice(x,1);
        } else if (fish.price <= maxPrice) {
            let purchasedAmount = Math.ceil(fish.amount/2);
            restaurantInventory.push({...fish, amount: purchasedAmount});
            restaurantMessage += `${purchasedAmount} ${fish.species}\n`;
            fish.amount -= purchasedAmount;
        }
    }

    // restaurantInventory = purchasedFish.flatMap(fish =>
    //     fish.price <= maxPrice ? (fish.amount -= Math.ceil(fish.amount/2), restaurantMessage += `${fish.amount} ${fish.species}\n`, {...fish, amount: Math.ceil(fish.amount/2)}) : []
    // )

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