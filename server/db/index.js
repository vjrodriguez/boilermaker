//import database
const db = require('./database')
//import all models
const Dog = require('./models/dog')
const Owner = require('./models/owner')

//make associations between models
Owner.hasMany(Dog)
Dog.belongsTo(Owner)

//export db and models for use in other files
module.exports = { db, Dog, Owner }
