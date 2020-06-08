const Sequelize = require('sequelize')
const db = require('../database')
const crypto = require('crypto')

const User = db.define('user', {

  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: Sequelize.STRING,
  },
  salt: {
    type: Sequelize.STRING
  }
},{
  hooks: {
    beforeCreate: setSaltAndPassword,
    beforeUpdate: setSaltAndPassword
  }
})

//instance methods:
User.prototype.correctPassword = function (candidatePassword) {
  // should return true or false for if the entered password matches
  return User.encryptPassword(candidatePassword, this.salt) === this.password
};
User.prototype.sanitize = function () {
  //lodash omit creates a shallow clone of an object, excluding the specified prperties(can be arrays of property name), first arg is the object, second arg is either a callback or array with specified properties
  return _.omit(this.toJSON(), ['password', 'salt'])
}


// class methods
User.generateSalt = function () {
  // this should generate our random salt
  //our salt has 16 characters, and base64 encoding!
  return crypto.randomBytes(16).toString('base64')
};

User.encryptPassword = function (plainText, salt) {
  // accepts a plain text password and a salt, and returns its hash
  return crypto.createHash('sha256')
    .update(plainText)
    .update(salt)
    .digest('hex')
};

//https://sequelize.org/master/class/lib/model.js~Model.html#instance-method-changed
function setSaltAndPassword (user) {
  // we need to salt and hash again when the user enters their password for the first time
  // and do it again whenever they change it
  if(user.changed('password')) {
    user.salt = User.generateSalt()
    user.password = User.encryptPassword(user.password, user.salt)
  }
}

//Another way to write hooks (instead of as a arg in db.define):
// const setSaltAndPassword = user => {
//   if (user.changed('password')) {
//     user.salt = User.generateSalt()
//     user.password = User.encryptPassword(user.password(), user.salt())
//   }
// }

// User.beforeCreate(setSaltAndPassword)
// User.beforeUpdate(setSaltAndPassword)
// User.beforeBulkCreate(users => {
//   users.forEach(setSaltAndPassword)
// })


module.exports = User
//change all the owner in api to user later
