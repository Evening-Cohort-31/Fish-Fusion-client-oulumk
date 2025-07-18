const {mongerInventory} = require('./fishMonger.js');

// Generates restaurant menu html
const fishMenu = (maxPrice) => {
    // Calls mongerInventory with the maxPrice assigns the returned array of fish objects
    let inventory = mongerInventory(maxPrice);

    let html = "<h1>Menu</h1>\n\n<article class = 'menu'>"

    // Loops through the purchased fish and generates html for menu items
    for (let fish of inventory) {
        let fishName = fish.species
        html += `\n\t<h2>${fishName}</h2>\n\t<section class="menu__item">${fishName} Soup</section>\n\t<section class="menu__item">${fishName} Sandwich</section>\n\t<section class="menu__item">Grilled ${fishName}</section>\n`
    }
    html += "\n</article>"

    // Returns html of the full menu
    return html
}

module.exports = {fishMenu}


