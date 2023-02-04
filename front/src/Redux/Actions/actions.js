import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from "./types";
import axios from "axios";

export const addFavorite = (character) => {
    // return {
    //     type: ADD_FAVORITE,
    //     payload: character
    return async (dispatch) => {
        const response = await axios.post("http://localhost:3001/characters/fav", character)
        const data = response.data;

        return dispatch({
            type: ADD_FAVORITE,
            payload: data
        })
    }
}
// }

export const deleteFavorite = (id) => {
    // return {
    //     type: DELETE_FAVORITE,
    //     payload: id
    // }
    return async (dispatch) => {
        const response = await axios.delete(`http://localhost:3001/characters/fav/${id}`)
        const data = response.data;
        return dispatch({
            type: DELETE_FAVORITE,
            payload: data // id
        })
    }
}

export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender
    }
}

export const orderCards = (id) => {
    return {
        type: ORDER,
        payload: id
    }
}

// Crear una action-creator con el nombre "filterCards". Esta action-creator recibirá por parámetro un status. La action que retornará tendrá un type llamado "FILTER", y dentro del payload irá el género recibido.

// Crear una action-creator con el nombre "orderCards". Esta action-creator recibirá por parámetro un id. La action que retornará tendrá un type llamado "ORDER", y dentro del payload irá el id recibido.