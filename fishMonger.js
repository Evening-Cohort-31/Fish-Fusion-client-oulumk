const {boatInventory} = require('./fishingBoat.js');

// Filters fish inventory by monger's and chef's requirements and returns results
function mongerInventory(maxPrice) {
    let inventory = boatInventory();
    let purchasedFish = [];
    for (let fish of inventory) {
        if (fish.amount >= 10 && fish.price < 7.50) {
            purchasedFish.push({
                id: fish.id,
                price: fish.price,
                species: fish.species,
                weight: fish.weight,
                amount: 10
            });
        }
    }

    let restaurantInventory = []
    for (let fish of purchasedFish) {
        if (fish.price <= maxPrice) {
            restaurantInventory.push(
                {
                    id: fish.id,
                    species: fish.species,
                    weight: fish.weight,
                    amount: 5
                }
            )
        }
    }

    return restaurantInventory
};

module.exports = {
    mongerInventory
};