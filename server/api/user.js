const router = require('express').Router()
const User = require('../db/models/user')

router.put('/login', async(req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email
      }
    })
    if(!user) {
      res.status(401).send('User not found!')
    } else if (!user.correctPassword(req.body.password)) {
      res.status(401).send('Incorrect Password!')
    } else {
      req.login(user, err => {
        err ? next(err) : res.json(user)
      })
    }
  } catch (error) {
    next(error)
  }
})

router.post('/signup', async (req, res, next) => {
  try {
    const newUser = await User.create(req.body)
    req.login(user, err => {
      err ? next(err) : res.json(newUser)
    })
  } catch (error) {
    next(error)
  }
})

router.delete('/logout', (req, res) => {
  req.logout()
  req.session.destroy()
  res.sendStatus(204)
})

router.get('/me', (req, res, next) => {
  //passport has attached the session user to the request object
  res.json(req.user)
})

module.exports = router
