const {catchFish} = require("./fishingBoat.js")
const {mongerPurchase} = require("./fishMonger.js");
const {chefPurchase} = require("./chef.js");
const {inventoryLogger} = require("./inventoryLogger.js");
const { fishMenu } = require("./restaurant.js")

// Sets the max price the chef is willing to pay
const dailyPriceLimit = 5.00

// Fishing boat catches fish
const caughtFish = catchFish();
inventoryLogger("Fishing", caughtFish)

// Monger purchases fish from fishing boat
const mongerInventory = mongerPurchase(caughtFish);
inventoryLogger("Monger", mongerInventory);
inventoryLogger("Fishing", caughtFish);

// Chef purchases fish from monger
const chefInventory = chefPurchase(mongerInventory, dailyPriceLimit);
inventoryLogger("Restaurant", chefInventory);
inventoryLogger("Monger", mongerInventory);


// Call fishMenu to generate menu html
const menu = fishMenu(chefInventory)

// Logs menu html to the console
console.log(menu)

