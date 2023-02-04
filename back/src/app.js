const express = require("express")
const server = express()
const { PORT } = require('./config.js')
const routes = require('./routes/index.js')
const cors = require("cors")

server.listen(PORT, () => {
    //aca podes poner un codigo que se ejecute cuando se levanta el servidor
    console.log(`Servidor levantado en el puerto ${PORT}`)
})

server.use(cors())
server.use(express.json())

server.use('/', routes) // aca ponemos un middleware donde va a redirigir todos los request a '/' a un archivo "routes"
// ese archivo aun no existe
