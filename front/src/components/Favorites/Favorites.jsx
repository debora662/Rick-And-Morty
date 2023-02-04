import Card from '../Card/Card';
import styles from "./Favorites.module.css"
import { connect, useDispatch } from 'react-redux';
import { orderCards, filterCards } from '../../Redux/Actions/actions';

function Favorites({ myFavorites }) {

    const dispatch = useDispatch()
    const handlerOrder = (event) => {
        dispatch(orderCards(event.target.value))
    }

    const handlerFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }

    return (
        <div>
            <select onChange={handlerOrder}>
                <option value="Order" disabled="disable">Order By</option>
                <option value="Ascendente">Ascendente</option>
                <option value="Descendente">Descendente</option>
            </select>
            <select onChange={handlerFilter}>
                <option value="filter" disabled="disable">Filter By</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Unknown">Unknown</option>
                <option value="Genderless">Genderless</option>
            </select>

            <div className={styles.cards}>
                {myFavorites.map((character) => {
                    return (
                        <Card
                            id={character.id}
                            key={character.id}
                            character={character}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites) 