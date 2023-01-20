import React from "react";
import styles from "./About.module.css"
import { useState } from "react";

export default function About() {

    const [show, setShow] = useState(false)

    const handleShow = () => {
        setShow(!show)
    }

    return (
        <div className={styles.contenedor}>

            <h3>Hola soy Deby!!!</h3>
            <img alt=""></img>
            <button onClick={handleShow}>Ver más...</button>
            {show ?
                <p style={{ color: 'yellow' }}>Me llamo Débora Antonela Mazzitelli, tengo 36 años, soy taurina y mamá de dos princesitas de 4 y 7 años. Me considero una persona simpática, buena, sociable, divertida, que siempre que pueda ayudar en algo ahí estoy presente!!
                    Actualmente estoy estudiando en Henry para ser FullStack Web Developer, un desafio muy importante para mí... ya que hacía años que no estudiaba, agradecida por contar con hermosas personas que me acopañan y me ayudan en mi día a día.
                    Estoy muy contenta con el bootcamp más allá de su intensidad y dificultad, miró hacia atrás y lo comparo con el ahora, y me doy cuenta de todo lo que voy aprendiendo que para mi es ya woow. Al mismo tiempo es muy grato contar con compañeros muy copados y con buena predisposición, lo mismo puedo decir de los TAs e Instructores, siempre están con la mejor.

                    Mi App
                    Bueno he realizado esta App con todos los conocimientos aprendidos en el M2, manipulando React, estilos, manejos de estados, routing. La aplicación cuenta con la temática de Rick and Morty, donde podremos interactuar con Cards de los personajes de esta serie animada.
                    Podremos hacer busquedas y obtener información de dichos personajes.
                </p> : null
            }

        </div>
    )
}