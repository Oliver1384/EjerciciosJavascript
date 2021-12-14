function init() {
    let botonJuegoMoneda = document.getElementById('botonJuegoMoneda');
    botonJuegoMoneda.addEventListener('click',jugarMoneda)
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

function jugarMoneda(){
    let resultado = valorAleatorio();
    let caraUsuario = document.getElementById("monedaCara").checked;
    let cruzUsuario = document.getElementById("monedaCruz").checked;
    if (caraUsuario === false && cruzUsuario === false){
        return;
    } 
    cambiarClaseProvisionalmente();
    animacion(resultado)
  
    let contenedor  = document.getElementById("resultadoJuegoMoneda");
    removeAllChilds(contenedor);
    if (caraUsuario === true && resultado == 1 || cruzUsuario === true && resultado == 0){
        setTimeout(function agregarResultado(){
            let contenido = document.createTextNode('Ganador');
            removeAllChilds(contenedor);
            contenedor.appendChild(contenido);
        },3000);
    } else {
        setTimeout(function agregarResultado(){
            let contenido = document.createTextNode('Perdedor');
            contenedor.appendChild(contenido);
        },3000);
    }
}

function agregarResultado(nombreContenedor,texto){
    let contenedor  = document.getElementById(nombreContenedor);
    let contenido = document.createTextNode(texto);
    removeAllChilds(contenedor);
    contenedor.appendChild(contenido);
}


function valorAleatorio(){
    let numeroAleatorio = Math.floor(Math.random() * (1 - 0 + 1) + 0); 
    return numeroAleatorio;
}


function animacion(resultadoValor){
    let button = document.getElementById("botonJuegoMoneda");
    button.classList.add("ocultarBoton");
    let element = document.getElementById("coin");

    if(resultadoValor == 1){
        element.classList.remove("provisional");
        element.classList.add("heads");
    } else{
        element.classList.remove("provisional");
        element.classList.add("tails"); 
    }
    
}

function cambiarClaseProvisionalmente(){
    let button = document.getElementById("botonJuegoMoneda");
    
    setTimeout(function(){
        let element = document.getElementById("coin");
        element.classList.remove("heads");
        element.classList.remove("tails");
        element.classList.add("provisional");
        button.classList.remove("ocultarBoton");
    },4000);
}


  