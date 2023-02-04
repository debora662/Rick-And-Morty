import React from "react";
import imgError from "../../assets/error.jpg"
import styles from "./Error.module.css"

export default function Error () {

    return (
        <div>
            <img className={styles.imagen} src={imgError} alt="404 Page Not Found"/>
        </div>
    )
}



