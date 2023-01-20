import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from "../Actions/types"

const initialState = {
    myFavorites: [],
    allCharacters: []
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_FAVORITE:
            return {
                ...state,
                myFavorites: [...state.myFavorites, payload]                
            }
        case DELETE_FAVORITE:
            const filtrados = state.myFavorites.filter((characters) => {
                return characters.id !== payload
            })
            return {
                ...state,
                myFavorites: filtrados
            }

        default:
            return state;
    }
}



export default reducer;