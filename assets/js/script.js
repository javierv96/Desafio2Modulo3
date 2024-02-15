let expresionRegular = /^[A-Za-zÁáÉéÍíÓóÚúÜüÑñ\s]+$/;

function login(event) {
    event.preventDefault();
    let nombre = document.getElementById('nombre').value;
    let asunto = document.getElementById('asunto').value;
    let mensaje = document.getElementById('mensaje').value;

    validacionNombre(nombre);
    validacionAsunto(asunto);
    validacionMensaje(mensaje);

    if (expresionRegular.test(nombre) && expresionRegular.test(asunto) && expresionRegular.test(mensaje)) {
        document.querySelector(".resultado").innerHTML = "Mensaje enviado con éxito !!!";
    } else {
        document.querySelector(".resultado").innerHTML = "";
    }

}

function validacionNombre(nombre) {
    if (nombre !== "") {
        if (expresionRegular.test(nombre)) {
            document.querySelector(".errorNombre").innerHTML = "";
        } else {
            document.querySelector(".errorNombre").innerHTML = "Ingrese un nombre valido.";
            alert('El formulario solo acepta caracteres de la "a" hasta la "z". Favor ingrese un nombre valido')
        }
    } else {
        document.querySelector(".errorNombre").innerHTML = "El nombre es requerido.";
    }
}

function validacionAsunto(asunto) {
    if (asunto !== "") {
        if (expresionRegular.test(asunto)) {
            document.querySelector(".errorAsunto").innerHTML = "";
        } else {
            document.querySelector(".errorAsunto").innerHTML = "Ingrese un asunto valido.";
            alert('El formulario solo acepta caracteres de la "a" hasta la "z". Favor ingrese un asunto valido')
        }
    } else {
        document.querySelector(".errorAsunto").innerHTML = "El asunto es requerido.";
    }
}

function validacionMensaje(mensaje) {
    if (mensaje !== "") {
        if (expresionRegular.test(mensaje)) {
            document.querySelector(".errorMensaje").innerHTML = "";
        } else {
            document.querySelector(".errorMensaje").innerHTML = "Ingrese un mensaje valido.";
            alert('El formulario solo acepta caracteres de la "a" hasta la "z". Favor ingrese un mensaje valido')
        }
    } else {
        document.querySelector(".errorMensaje").innerHTML = "El mensaje es requerido.";
    }
}

let form = document.getElementById("formulario");

form.addEventListener("submit", login);