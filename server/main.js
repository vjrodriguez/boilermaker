//listen port stuff
//sync db??
//const db = require('./fakedatabase')
const app = require('./index')
const PORT = process.env.PORT || 3000

//db.sync()
// .then(() => {
//   console.log('db synced')
app.listen(PORT, () => console.log(`studiously serving silly sounds on port ${PORT}`))
// })
