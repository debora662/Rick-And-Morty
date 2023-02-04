const regexUsername = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;  //expresion regular para username
const regexPassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,10}$/i; //expresion regular para password

export const validate = (inputs) => { //3ºa creo una fn para validar cada input del formulario

    const errors = {}

    if (!inputs.username) {
        errors.username = "Username no puede estar vacío";
    }

    else if (!regexUsername.test(inputs.username)) {
        errors.username = "El Username debe ser un correo electrónico";
    }

    else if (inputs.username.length > 35) {
        errors.username = "Username no puede tener más de 35 caracteres"

    }
    else if (!inputs.password) {
        errors.password = "La contraseña no puede estar vacía"
    }

    else if (!regexPassword.test(inputs.password)) {
        errors.password = "La contraseña debe tener una longitud entre 6 y 10 caracteres"
    }
    

    return errors;
}


// el nombre de usuario tiene que ser un email (explora validaciónes REGEX en internet!).
// el nombre de usuario no puede estar vacío.
// // el nombre de usuario no puede tener más de 35 caracteres.

// PASSWORD
// la contraseña tiene que tener al menos un número.
// la contraseña tiene que tener una longitud entre 6 y 10 caracteres.
// No te olvides de renderizar y darle estilos a tus errores! Te dejamos un ejemplo de cómo puede quedar.