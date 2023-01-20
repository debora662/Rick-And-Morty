import React from "react";
import styles from "./Form.module.css"
import { validate } from "./validate"

export default function Form({login}) {

    const [userData, setUserData] = React.useState({
        username: "",
        password: "",
    })

    const [errors, setErrors] = React.useState({
        username: "",
        password: "",
    })

    const handleInputChange = (event) => {
        
        const property = event.target.name
        const value = event.target.value

        setUserData({
            ...userData,
            [property]: value
        })

        setErrors(
            validate({
                ...userData,
                [property]: value
            })
        )
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        login(userData);
    }

    // Esta función por dentro sólo debe ejecutar la función "login" recibida por props. No te olvides de pasarle por parámetro tu estado local userData!

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className={styles.login}>
                    <label>Username</label>
                    <input className={errors.username && styles.warning} name="username" type="text" placeholder="Escribe tu email..." value={userData.username} onChange={handleInputChange}></input>
                    {errors.username && <p className='danger'>{errors.username}</p>}
                    
                    <label >Password</label>
                    <input className={errors.password && styles.warning} name="password" type="text" placeholder="Escribe tu contraseña..." value={userData.password} onChange={handleInputChange}></input>
                    {errors.password && <p className='danger'>{errors.password}</p>}
                    
                    <button type="submit">LOGIN</button>
                </div>
            </form>
        </div>
    )

    
}

// {errors.name && <p className='danger'>{errors.name}</p>}





