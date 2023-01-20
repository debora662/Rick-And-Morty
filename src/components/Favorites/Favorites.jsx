    import Card from '../Card/Card';
import styles from "./Favorites.module.css"
import { connect } from 'react-redux';

function Favorites({ myFavorites }) {

    return (
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
    )
}

export const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites) 