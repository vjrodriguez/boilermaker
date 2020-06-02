const express = require('express')
const router = express.Router()
//or just => const router = require('express').Router()

// router.use()
// router.use()
// router.use()
// router.use()

router.use(function (req, res, next) {
  const err = new Error('Not Found!');
  err.status = 404
  next(err)
})

module.exports = router
