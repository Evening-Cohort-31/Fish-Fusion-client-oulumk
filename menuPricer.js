const menuPricer = (fish, portionPerFish) => {
    const fishPrice = fish.price;

    const menuPrice = Math.ceil(fishPrice/portionPerFish)+0.99

    return menuPrice
}

module.exports = {menuPricer}