const router = require('express').Router()
const { Dog, Owner } = require('../db')

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
    const owner = await Owner.findByPk(req.body.id)
    dog = await dog.setOwner(owner)
    dog = await dog.update({ adopted: true })
    res.send(dog)
  } catch (error) {
    next(error)
  }
})

module.exports = router
