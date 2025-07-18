// Logs the provided inventory to the console
const inventoryLogger = (inventoryType, inventoryArray) => {
    const openingLines = [
        {
            type: "Fishing",
            opener: "The current inventory of the fishing boat is:\n"
        },
        {
            type: "Monger",
            opener: "The current inventory of the Fishmonger is:\n"
        },
        {
            type: "Restaurant",
            opener: "The current inventory of the restaurant is:\n"
        }
    ]

    let inventoryMessage = openingLines.find(line => line.type === inventoryType).opener

    inventoryArray.map(fish => inventoryMessage += `${fish.amount} ${fish.species}\n`)

    console.log(inventoryMessage)
}

module.exports = {inventoryLogger}