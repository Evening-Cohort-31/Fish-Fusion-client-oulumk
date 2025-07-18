const {menuPricer} = require("./menuPricer.js")

// Generates restaurant menu html
const fishMenu = (inventory) => {
   
    let html = "<h1>Menu</h1>\n\n<article class = 'menu'>"

    // Loops through the purchased fish and generates html for menu items
    for (let fish of inventory) {
        let fishName = fish.species
        
        html += `\n\t<h2>${fishName}</h2>\n\t<section class="menu__item">${fishName} Soup: $${menuPricer(fish, 6)}</section>\n\t<section class="menu__item">${fishName} Sandwich: $${menuPricer(fish,4)}</section>\n\t<section class="menu__item">Grilled ${fishName}: $${menuPricer(fish,2)}</section>\n`
    }
    html += "\n</article>"

    // Returns html of the full menu
    return html
}

module.exports = {fishMenu}


