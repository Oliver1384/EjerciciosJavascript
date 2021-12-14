
function init(){
    let botonPiedraPapelTijera = document.getElementById("botonPiedraPapelTijera");
    botonPiedraPapelTijera.addEventListener('click', jugarPiedraPapelTijera);

    let botonReinicioPiedraPapelTijera = document.getElementById("botonReinicioPiedraPapelTijera");
    botonReinicioPiedraPapelTijera.addEventListener('click', reinicialPiedraPapelTijera);
}
document.addEventListener("DOMContentLoaded", init);


/**
* Elimina todos los hijos del elemento pasado por parámetro
*/
function removeAllChilds(element) {
    while (element.firstChild) {
            element.removeChild(element.firstChild);
    }
}


function jugarPiedraPapelTijera() {
    let resultado = 'Espere';
    agregarResultado(resultado);
    let maximo = 0;
    let i = 0;
    let pics =  ["./img/piedraPapelTijera/paper.png","./img/piedraPapelTijera/rock.png","./img/piedraPapelTijera/scissors.png"];
    let pantalla = document.getElementById("imgPiedraPapelTijera");
    let piedra = document.getElementById("piedra").checked;
    let papel = document.getElementById("papel").checked;
    let tijera = document.getElementById("tijera").checked;
    if (piedra === true || tijera === true || papel === true){
        function toggle() {
            maximo = maximo+1;
            if (maximo > 20){
                clearInterval(myVar);
                if (i === 0 && papel){
                    agregarResultado('Empate');
                } else  if (i === 1 && piedra){
                    agregarResultado('Empate');
                } else if (i === 2 && tijera){
                    agregarResultado('Empate');
                } else if (i === 0 && tijera){
                    agregarResultado('Gana el jugador');
                } else  if (i === 1 && papel){
                    agregarResultado('Gana el jugador');
                } else if (i === 2 && piedra){
                    agregarResultado('Gana el jugador');
                } else {
                    agregarResultado('Gana la máquina');
                }
            }
            pantalla.src = pics[i];           
            i = Math.floor(Math.random() * ( pics.length- 0 ) + 0);
        }
    } else {
        agregarResultado('Seleccione un valor');
    }
    let myVar = setInterval(toggle, 150);
}

function agregarResultado(resultado) {
    let contenedorResultado = document.getElementById("resultadoPiedraPapelTijera");
    let contenido = document.createTextNode(resultado);
    removeAllChilds(contenedorResultado);
    contenedorResultado.appendChild(contenido);
}

function reinicialPiedraPapelTijera(){
    document.getElementById("piedra").checked = false;
    document.getElementById("papel").checked = false;
    document.getElementById("tijera").checked = false;
    let pantalla = document.getElementById("imgPiedraPapelTijera");
    agregarResultado('');
    pantalla.src = "./img/piedraPapelTijera/main.png"; 
}


function reiniciar(){
    location.reload();
}