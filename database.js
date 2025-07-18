// array of fish objects
let regularInventory = [
    { id: 1, species: "Halibut", weight: 6, price: 3.55, amount: 30, isRare: false },
    { id: 2, species: "Mackerel", weight: 3, price: 4.10, amount: 48, isRare: false },
    { id: 3, species: "Salmon", weight: 5, price: 3.05, amount: 25, isRare: false },
    { id: 4, species: "Walleye", weight: 2, price: 9.45, amount: 19, isRare: false },
    { id: 5, species: "Sunfish", weight: 25, price: 5.18, amount: 1, isRare: false },
    { id: 6, species: "Orange Roughy", weight: 4, price: 6.95, amount: 37, isRare: false },
    { id: 7, species: "Tuna", weight: 18, price: 8.66, amount: 5, isRare: false },
    { id: 8, species: "Puffer", weight: 2, price: 9.84, amount: 52, isRare: false },
    { id: 9, species: "Cod", weight: 7, price: 4.25, amount: 22, isRare: false },
    { id: 10, species: "Snapper", weight: 4, price: 7.30, amount: 15, isRare: false },
    { id: 11, species: "Flounder", weight: 3, price: 5.85, amount: 28, isRare: false },
    { id: 12, species: "Swordfish", weight: 45, price: 12.50, amount: 3, isRare: false },
    { id: 13, species: "Mahi-Mahi", weight: 8, price: 6.75, amount: 12, isRare: false },
    { id: 14, species: "Trout", weight: 2, price: 5.95, amount: 35, isRare: false },
    { id: 15, species: "Sea Bass", weight: 6, price: 8.20, amount: 18, isRare: false },
    { id: 16, species: "Grouper", weight: 12, price: 9.85, amount: 8, isRare: false }
]

// array of isRare and exotic fish objects
let specialInventory = [
    { id: 17, species: "Bluefin Tuna", weight: 120, price: 45.00, amount: 2, isRare: true },
    { id: 18, species: "King Salmon", weight: 35, price: 25.75, amount: 3, isRare: true },
    { id: 19, species: "Yellowfin Tuna", weight: 80, price: 32.50, amount: 1, isRare: true },
    { id: 20, species: "Chilean Sea Bass", weight: 15, price: 18.90, amount: 4, isRare: true },
    { id: 21, species: "Wild Striped Bass", weight: 22, price: 21.25, amount: 2, isRare: true },
    { id: 22, species: "Monkfish", weight: 10, price: 15.60, amount: 5, isRare: true }
]

module.exports = {
    regularInventory,
    specialInventory
}