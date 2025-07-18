const chefPurchase = (inventory, maxPrice) => {
    let purchases = []

    // Generates the restaurant inventory &  updates the monger Inventory    
    // Loops through the mongerInventory
    for (let x = 0; x < inventory.length; x ++) {
        // Tracks current fish
        let fish = inventory[x];

        // Purchases all rare fish
        if (fish.isRare) {
            purchases.push(fish);
            inventory.splice(x,1);

        // Purchases half the inventory of regular fish that are cheaper or equal to the max price
        } else if (fish.price <= maxPrice) {
            let purchasedAmount = Math.ceil(fish.amount/2);
            purchases.push({...fish, amount: purchasedAmount, price: Math.round(fish.price * 200,)/100});
            fish.amount -= purchasedAmount;
        }
    }
    return purchases
}

module.exports = { chefPurchase }