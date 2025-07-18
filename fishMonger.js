const {generateInventory} = require('./fishingBoat.js');
const {inventoryLogger} = require("./inventoryLogger.js")

// Filters fish inventory by monger's and chef's requirements and returns results
function mongerInventory(maxPrice) {
    // Calls generateInventory to populate inventory of caught fish
    let inventory = generateInventory();
    
    // Logs fishing boat inventory
    inventoryLogger("Fishing", inventory)
        
    let purchasedFish = [];

    // Generates the mongerInventory & updates the boatInventory

    // Loops through the boatInventory
    for (let x = 0; x < inventory.length; x ++) {

        // Tracks current fish
        let fish = inventory[x]
        
        // Purchases all rare fish
        if (fish.rare) {
            purchasedFish.push({...fish})
            inventory.splice(x,1)
        }
        // Purchases 10 regular fish if conditions are met
        else if (fish.amount >= 10 && fish.price < 7.50) {
            purchasedFish.push({...fish, amount: 10})
            fish.amount -= 10
        }
    }

    // Logs the Fishmonger & fishing boat inventories
    inventoryLogger("Monger", purchasedFish);
    inventoryLogger("Fishing", inventory);

    let restaurantInventory = []

    // Generates the restaurant inventory &  updates the monger Inventory
    
    // Loops through the mongerInventory
    for (let x = 0; x < purchasedFish.length; x ++) {
        // Tracks current fish
        let fish = purchasedFish[x];

        // Purchases all rare fish
        if (fish.rare) {
            restaurantInventory.push(fish);
            purchasedFish.splice(x,1);

        // Purchases half the inventory of regular fish that are cheaper or equal to the max price
        } else if (fish.price <= maxPrice) {
            let purchasedAmount = Math.ceil(fish.amount/2);
            restaurantInventory.push({...fish, amount: purchasedAmount});
            fish.amount -= purchasedAmount;
        }
    }

    // Logs the Restaurant and Fishmonger inventories
    inventoryLogger("Restaurant", restaurantInventory);
    inventoryLogger("Monger", purchasedFish)

    // Returns the fish purchased by the restaurant
    return restaurantInventory
};

module.exports = {
    mongerInventory
};