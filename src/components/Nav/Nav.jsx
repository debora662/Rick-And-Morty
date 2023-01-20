import SearchBar from "../SearchBar/SearchBar"
import React from "react"
import { Link, useLocation } from "react-router-dom"
import styles from "./Nav.module.css"
import { useSelector } from "react-redux"



export default function Nav({ onSearch, lucky }) {

    const favs = useSelector((state) => state.myFavorites)
    

    const location = useLocation().pathname

    if (location !== "/") {
        return (
            <div className={styles.containerNav}>
                <Link to="/home">
                    <button className={styles.btn}>Home</button>
                </Link>
                <Link to="/about">
                    <button className={styles.btn}>About</button>
                </Link>
                <Link to="/Favorites">
                <button className={styles.btn}>Favorites {favs.length === 0 ? null : favs.length}</button>
                </Link>
                <SearchBar onSearch={onSearch} />
                <button className={styles.btn} onClick={lucky}>Voy a tener suerte</button>
            </div>
        )
    } else return null

}

//En la Navbar agrega el link About que dirija al componente About y el link Home para que dirija al componente Home.