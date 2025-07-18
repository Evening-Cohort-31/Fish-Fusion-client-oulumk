const {generateInventory} = require('./fishingBoat.js');
const {inventoryLogger} = require("./inventoryLogger.js")

// Filters fish inventory by monger's and chef's requirements and returns results
function simulateSupplyChain(maxPrice) {
    // Calls generateInventory to populate inventory of caught fish
    let fishingBoatInventory = generateInventory();
    
    // Logs fishing boat inventory
    inventoryLogger("Fishing", fishingBoatInventory)
        
    let fishmongerInventory = [];

    // Generates the mongerInventory & updates the boatInventory

    // Loops through the boatInventory
    for (let x = 0; x < fishingBoatInventory.length; x ++) {

        // Tracks current fish
        let fish = fishingBoatInventory[x]
        
        // Purchases all rare fish
        if (fish.rare) {
            fishmongerInventory.push({...fish})
            fishingBoatInventory.splice(x,1)
        }
        // Purchases 10 regular fish if conditions are met
        else if (fish.amount >= 10 && fish.price < 7.50) {
            fishmongerInventory.push({...fish, amount: 10})
            fish.amount -= 10
        }
    }

    // Logs the Fishmonger & fishing boat inventories
    inventoryLogger("Monger", fishmongerInventory);
    inventoryLogger("Fishing", fishingBoatInventory);

    let restaurantInventory = []

    // Generates the restaurant inventory &  updates the monger Inventory
    
    // Loops through the mongerInventory
    for (let x = 0; x < fishmongerInventory.length; x ++) {
        // Tracks current fish
        let fish = fishmongerInventory[x];

        // Purchases all rare fish
        if (fish.rare) {
            restaurantInventory.push(fish);
            fishmongerInventory.splice(x,1);

        // Purchases half the inventory of regular fish that are cheaper or equal to the max price
        } else if (fish.price <= maxPrice) {
            let purchasedAmount = Math.ceil(fish.amount/2);
            restaurantInventory.push({...fish, amount: purchasedAmount});
            fish.amount -= purchasedAmount;
        }
    }

    // Logs the Restaurant and Fishmonger inventories
    inventoryLogger("Restaurant", restaurantInventory);
    inventoryLogger("Monger", fishmongerInventory)

    // Returns the fish purchased by the restaurant
    return restaurantInventory
};

module.exports = {
    mongerInventory: simulateSupplyChain
};