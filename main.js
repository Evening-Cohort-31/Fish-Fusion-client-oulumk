const { fishMenu } = require("./restaurant.js")

/*
  Do not comment out this code. 
  
  Your job is to make this small algorithm work by
  writing supporting functionality in the other 
  modules
*/
const dailyPriceLimit = 3.99
const menu = fishMenu(dailyPriceLimit)
console.log(menu)

