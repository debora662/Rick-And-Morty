import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css"
import { Link } from "react-router-dom"

export default function Detail() {

    const [character, setCharacter] = useState({});

    const { detailId } = useParams()
    console.log(detailId)
    console.log(character)
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
            .then((response) => response.json())
            .then((char) => {
                if (char.name) {
                    setCharacter(char);
                } else {
                    window.alert("No hay personajes con ese ID");
                }
            })
            .catch((err) => {
                window.alert("No hay personajes con ese ID");
            });
        return setCharacter({});
    }, [detailId]);


    return (
        <div className={styles.container}>
            <div id={styles.info}>
                <h1>{character.name}</h1>
                <div className={styles.infoGroup}>
                    <p>Estado: <span>{character.status}</span></p>
                    <p>Tipo: <span>{character.type}</span></p>
                </div>
                <div className={styles.infoGroup}>
                <p>Especie: <span>{character.species}</span></p>
                <p>Género: <span>{character.gender}</span></p>
                <p>Origen: <span>{character.origin?.name}</span></p>
                </div>

            </div>
            <div id={styles.imgDiv}>
                <img src={character.image} alt={character.name} />
            </div>
        </div>
    )
}

// Name
// Status
// Specie
// Gender
// Origin --> es un objeto con propiedad name
// Image