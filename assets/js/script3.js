let expresionRegular = /^[0-9]+(\.[0-9]+)?$/;

const sumar = () => {
    let valor1 = document.getElementById('valor1').value;
    let valor2 = document.getElementById('valor2').value;

    if (expresionRegular.test(valor1) && expresionRegular.test(valor2)) {
        resultado = parseFloat(valor1) + parseFloat(valor2);
        document.querySelector(".resultado").innerHTML = resultado;
        console.log(resultado);
    } else {
        document.querySelector(".resultado").innerHTML = ("Error");
    }
}

const restar = () => {
    let valor1 = document.getElementById('valor1').value;
    let valor2 = document.getElementById('valor2').value;

    if (expresionRegular.test(valor1) && expresionRegular.test(valor2)) {
        resultado = parseFloat(valor1) - parseFloat(valor2);
        if (resultado < 0) {
            document.querySelector(".resultado").innerHTML = 0;
        } else {
            document.querySelector(".resultado").innerHTML = resultado;
        }
        console.log(resultado);
    } else {
        document.querySelector(".resultado").innerHTML = ("Error");
    }
}

document.getElementById("btn-sumar").addEventListener("click", sumar);
document.getElementById("btn-restar").addEventListener("click", restar);