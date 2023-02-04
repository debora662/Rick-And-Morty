import React from "react";
import styles from "./card.module.css"
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFavorite, deleteFavorite } from "../../Redux/Actions/actions";
import { useState, useEffect } from "react";

function Card({ character, onClose, id, deleteFavorite, addFavorite, myFavorites }) {

   useEffect(() => {
      //console.log(myFavorites)
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites, id]);

   const [isFav, setIsFav] = useState(false)

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false)
         deleteFavorite(id)
      } else {
         setIsFav(true)
         addFavorite(character)
      }
   }

   return (
      <div className={styles.contenedor}>
         <div className={styles.btn}>
            {isFav ? (
               <button className={styles.fav} onClick={handleFavorite}>❤️</button>
            ) : (
               <button className={styles.fav} onClick={handleFavorite}>🤍</button>
            )}

            {onClose ? (
               <button id={styles.close} onClick={() => onClose(character.id)}>X</button>
            ) : null}

         </div>
         <Link to={`/detail/${character.id}`}>
            <div id={styles.nameDiv}>
               <h2>{character.name}</h2>
            </div>
            <img height='200px' className={styles.img} src={character?.image} alt="" />
            <div id={styles.detailDiv}>
               <h3>{character.gender}</h3>
               <h3>{character.species}</h3>
            </div>
         </Link>
      </div>
   );
}

export const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}


export const mapDispatchToProps = (dispatch) => {
   return {
      addFavorite: (character) => { dispatch(addFavorite(character)) },
      deleteFavorite: (id) => { dispatch(deleteFavorite(id)) }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);

