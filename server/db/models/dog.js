const Sequelize = require('sequelize')
const db = require('../database')

const Dog = db.define('dog', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  phase: {
    type: Sequelize.ENUM('puppy', 'adult', 'senior'),
    allowNull: false,
  },
  adopted: {
    type: Sequelize.BOOLEAN,
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      'https://us.123rf.com/450wm/umbrosus/umbrosus1711/umbrosus171100009/89052438-stock-vector-cute-cartoon-puppy-silhouette-on-white-background.jpg?ver=6',
  },
})

module.exports = Dog
