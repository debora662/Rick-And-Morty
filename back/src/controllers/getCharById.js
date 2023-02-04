const axios = require("axios")

const getById = async (id) => {
    try {
        const response = (await axios.get(`https://rickandmortyapi.com/api/character/${id}`)).data // << en la const solo me guardo data
        const character = { //con lo que consegui de respuesta creo un objeto con las siguientes propiedades
            id: response.id,
            image: response.image,
            name: response.name,
            gender: response.gender,
            species: response.species
        }   
        return character
    } catch (err) {
        throw Error(err)
    }
}


module.exports = getById