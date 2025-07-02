const {mongerInventory} = require('./fishMonger.js');

// Generates restaurant menu html
const restaurantInventory = (maxPrice) => {
    let inventory = mongerInventory(maxPrice);

    let html = "<h1>Menu</h1>\n\n<article class = 'menu'>"

    for (let fish of inventory) {
        let fishName = fish.species
        html += `\n\t<h2>${fishName}</h2>\n\t<section class="menu__item">${fishName} Soup</section>\n\t<section class="menu__item">${fishName} Sandwich</section>\n\t<section class="menu__item">Grilled ${fishName}</section>\n`
    }
    html += "\n</article>"
    return html

}

console.log(restaurantInventory(4))


