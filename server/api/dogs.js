const router = require('express').Router()
const { Dog, User } = require('../db')

router.get('/:id', async (req, res, next) => {
  try {
    const dog = await Dog.findByPk(req.params.id)
    res.send(dog)
  } catch (error) {
    next(error)
  }
})

router.put('/:id/adopt', async (req, res, next) => {
  try {
    let dog = await Dog.findByPk(req.params.id)
    const user = await User.findByPk(req.body.id)
    dog = await dog.setUser(user)
    dog = await dog.update({ adopted: true })
    res.send(dog)
  } catch (error) {
    next(error)
  }
})

module.exports = router
