const { fishMenu } = require("./restaurant.js")

/*
  Do not comment out this code. 
  
  Your job is to make this small algorithm work by
  writing supporting functionality in the other 
  modules
*/

// Sets the max price the chef is willing to pay
const dailyPriceLimit = 5.00

// Call fishMenu to generate menu html
const menu = fishMenu(dailyPriceLimit)

// Logs menu html to the console
console.log(menu)

