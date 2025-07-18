
// Filters fish inventory by monger's and chef's requirements and returns results
function mongerPurchase(inventory) {
    // Calls generateInventory to populate inventory of caught fish
            
    let purchases = [];

    // Generates the mongerInventory & updates the boatInventory

    // Loops through the boatInventory
    for (let x = 0; x < inventory.length; x ++) {

        // Tracks current fish
        let fish = inventory[x]
        
        // Purchases all rare fish
        if (fish.isRare) {
            purchases.push({...fish, price: Math.round(fish.price * 150,)/100})
            inventory.splice(x,1)
        }
        // Purchases 10 regular fish if conditions are met
        else if (fish.amount >= 10 && fish.price < 7.50) {
            purchases.push({...fish, amount: 10, price: Math.round(fish.price * 115,)/100})
            fish.amount -= 10
        }
    }
    // Returns the fish purchased by the restaurant
    return purchases
};

module.exports = {
    mongerPurchase
};