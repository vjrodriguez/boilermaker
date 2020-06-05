//import database
const db = require('./database')
//import all models
const Owner = require('./models/owner')
const Dog = require('./models/dog')

//make associations between models
Owner.hasMany(Dog)
Dog.belongsTo(Owner)
console.log(Object.keys(Dog.prototype))

//export db and models for use in other files
module.exports = { db }
