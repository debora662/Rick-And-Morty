const express = require('express')
const router = express.Router()
const axios = require("axios")
const getById = require('../controllers/getCharById')

// aca van a llegar las request a /characters, porque las manda el router


router.get('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const character = await getById(id)
        res.status(200).json(character)
    }
    catch (err) {
        console.log(err)
        res.status(400).send("not found character")  //respuesta ante un error 
    }
})


router.get('/detail/:id', async (req, res) => {
    const { id } = req.params

    try {
        const response = (await axios.get(`https://rickandmortyapi.com/api/character/${id}`)).data //peticion a la api 

        const character = { //con lo que consegui de respuesta creo un objeto con las siguientes propiedades
            id: response.id,
            image: response.image,
            name: response.name,
            gender: response.gender,
            species: response.species,
            status: response.status,
            origin: response.origin.name
        }

        res.send(character)

    } catch (error) {
        res.status(404).send("not found character")
    }
})

let fav = [];

router.get("/fav", (req, res) => {   
    
    res.status(200).json(fav);
})

router.post("/fav", (req, res) => {
    console.log(req.body)
            
    fav.push(req.body)
    res.status(200).send(req.body)
})

router.delete("/fav/:id", (req, res) => {
    const { id } = req.params

    const favFiltered = fav.filter(char => char.id !== Number(id))
    fav = favFiltered

    res.status(200).send(id)
})


module.exports = router // esto lo exportamos porque en index.js lo estamos importando, para el middleware que dirige las request para aca
