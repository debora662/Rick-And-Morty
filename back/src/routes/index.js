const { Router } = require('express') // para usar un enrutador lo importamos de express
const router = Router() // instanciamos de Router
const characters = require('./characters.js') // importo characters que es donde voy a poner mis rutas de personajes
const users = require('./users.js')

router.use('/characters', characters) // todos los request que vayan a /characters (sin importar si son GET, POST, etc), los mandamos al archivo "characters"
router.use('/users', users)


module.exports = router