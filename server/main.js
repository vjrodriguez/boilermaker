//listen port stuff
//sync db??
const { db } = require('./db')
const app = require('./index')
const PORT = process.env.PORT || 3000

db.sync().then(() => {
  console.log('db synced')
  app.listen(PORT, () => console.log(`serving dad jokes on port ${PORT}`))
})
