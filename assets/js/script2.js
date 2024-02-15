let rojo = document.getElementById('btn-1').style.backgroundColor;
let naranja = document.getElementById('btn-2').style.backgroundColor;
let amarillo = document.getElementById('btn-3').style.backgroundColor;
let verde = document.getElementById('btn-4').style.backgroundColor;
let celeste = document.getElementById('btn-5').style.backgroundColor;
let violeta = document.getElementById('btn-6').style.backgroundColor;

const colorRojo = () => {
    document.getElementById('caja').style.backgroundColor = rojo;
}
const colorNaranja = () => {
    document.getElementById('caja').style.backgroundColor = naranja;
}
const colorAmarillo = () => {
    document.getElementById('caja').style.backgroundColor = amarillo;
}
const colorVerde = () => {
    document.getElementById('caja').style.backgroundColor = verde;
}
const colorCeleste = () => {
    document.getElementById('caja').style.backgroundColor = celeste;
}
const colorVioleta = () => {
    document.getElementById('caja').style.backgroundColor = violeta;
}

document.getElementById("btn-1").addEventListener("click", colorRojo);
document.getElementById("btn-2").addEventListener("click", colorNaranja);
document.getElementById("btn-3").addEventListener("click", colorAmarillo);
document.getElementById("btn-4").addEventListener("click", colorVerde);
document.getElementById("btn-5").addEventListener("click", colorCeleste);
document.getElementById("btn-6").addEventListener("click", colorVioleta);