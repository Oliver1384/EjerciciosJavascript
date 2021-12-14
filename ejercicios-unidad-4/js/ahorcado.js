function init() {
    let palabraAdivinar = document.getElementById('palabraAdivinar');
    palabraAdivinar.addEventListener('blur',establecerPalabra);
    let letra = document.getElementById('letra');
    letra.addEventListener('blur',probarLetra);
    let botonReiniciar = document.getElementById('reiniciar');
    botonReiniciar.addEventListener('click', reiniciarAhorcado);
    desabilitarCampo('palabraAdivinar',false);
    desabilitarCampo('letra',true);
}
document.addEventListener("DOMContentLoaded", init);

let letrasMostrar = [];
let letrasUtilizadas = [];
let intentosFallidos = 0; 


function getLetrasMostrar(){
    return letrasMostrar;
}

/**
 * Si la letra no esta en el array la añade
 * @param {char} nuevaLetras 
 */
function setLetrasMostrar(nuevaLetra){
    let repetida = false;
    letrasMostrar.forEach(letra => {
        if (letra === nuevaLetra){
            repetida = true;
        } 
    });
    if (!repetida){
        letrasMostrar.push(nuevaLetra);
    }
}

function getIntentosFallidos(){
    return intentosFallidos;
}

function setIntentosFallidos(numero){
    intentosFallidos = numero;
}

function setLetrasUtilizadas(nuevaLetra){
    let repetida = false;
    letrasUtilizadas.forEach(letra => {
        if (letra === nuevaLetra){
            repetida = true;
        }
    });
    if(!repetida){
        letrasUtilizadas.push(nuevaLetra);
    }
}


function establecerPalabra(){
    let palabra = document.getElementById('palabraAdivinar').value;//palabra adivinar
    let letraAleatoria = letraAyudaAleatoria(palabra);
    setLetrasUtilizadas(letraAleatoria);
    let letrasMostrar = getLetrasMostrar();
    letrasMostrar.push(letraAleatoria);
    setLetrasMostrar(letraAleatoria);
    let textoResultado = '';
    for(let i = 0; i < palabra.length; i++){
        textoResultado += (palabra[i] === letraAleatoria) ? ` ${palabra[i]} ` : ' _ ';
    }
    agregarPalabra('visualizarPalabra', textoResultado);
    desabilitarCampo('palabraAdivinar',true);
    desabilitarCampo('letra',false);
}


//El maximo de intentosFallidos es 6
function probarLetra(){
    let contieneLetra = false;
    let palabra = document.getElementById('palabraAdivinar').value;
    let letra = document.getElementById('letra').value.toLowerCase();
    setLetrasUtilizadas(letra);
    let letrasMostrar = getLetrasMostrar();
    let textoResultado = '';

    for (let i = 0; i < palabra.length; i++) {
        let coincidencia = false;
        letrasMostrar.forEach(letraMostrar => {
            if (palabra[i] === letraMostrar && letraMostrar !== letra && coincidencia !== true){
                textoResultado += ` ${palabra[i]} `;
                setLetrasMostrar(palabra[i]);
                coincidencia = true;
            } 
        });

        if (palabra[i] === letra){
            textoResultado +=palabra[i];
            setLetrasMostrar(palabra[i])
            coincidencia = true;
            contieneLetra = true;
        }

        if (!coincidencia){
            textoResultado += ' _ ';
        }
    }
    if(!contieneLetra){
        setIntentosFallidos(getIntentosFallidos()+1);
    }
    dibujar();
    if (getLetrasMostrar().length+contieneRepetidas() === palabra.length){
        alert('Win');
        setTimeout(function(){
            reiniciarAhorcado();
        }, 100);
    }

    //textoResultado += `Número de errores ${getIntentosFallidos()}`;
    agregarPalabra('visualizarPalabra', textoResultado);
    agregarPalabra('intentosLetras', `Número de errores ${getIntentosFallidos()}`);

    let textoLetrasUtilizadas = 'Letras utilizadas:';
    letrasUtilizadas.forEach(letra => {
        textoLetrasUtilizadas += `${letra}-`;
    });

    agregarPalabra('letrasUtilizadas',textoLetrasUtilizadas);
}





function agregarPalabra(idContenedor, texto){
    let contenedor = document.getElementById(idContenedor);
    eliminarHijos(contenedor);
    let contenido = document.createTextNode(texto);
    contenedor.appendChild(contenido);
}


function letraAyudaAleatoria(palabra){
    let posicionAleatoria = Math.floor(Math.random() * palabra.length);
    return palabra[posicionAleatoria];
}



function eliminarHijos(element) {
    while (element.firstChild) {
            element.removeChild(element.firstChild);
    }
}


/**
 * Activa y desactiva los inputs de los formularios
 * @param {string} idCampo  
 * @param {boolean} desabilitar 
 */
function desabilitarCampo(idCampo,desabilitar){
    let campo = document.getElementById(idCampo);
    campo.disabled = desabilitar;
}


function reiniciarAhorcado(){
    agregarPalabra('visualizarPalabra','');
    document.getElementById('palabraAdivinar').value = '';
    document.getElementById('letra').value = '';
    intentosFallidos = 0;
    letrasMostrar = [];
    letrasUtilizadas = [];
    desabilitarCampo('palabraAdivinar',false);
    desabilitarCampo('letra',true);
    let canvas = document.getElementById("myCanvas");
    intentosFallidos = 0;
    canvas.width=canvas.width;
    agregarPalabra('letrasUtilizadas','');
    agregarPalabra('intentosLetras', '');
}

function contieneRepetidas(){
    let palabra = document.getElementById('palabraAdivinar').value;
    let cuenta = 0;
    for (let i = 0; i < palabra.length; i++){
        for(let j = 0; j < palabra.length; j++){
            if (palabra[i] === palabra[j]){
                cuenta++;
            }
        }
        cuenta--;
    }
    return cuenta/2;
}




/**
 * CANVAS
 */
function dibujarPalos(x,y,w,h){
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(x, y, w, h);
}

function dibujarCabezaTronco(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.arc(260, 225, 25, 0, 2 * Math.PI);
    ctx.fillRect(260, 250, 5, 60);
    ctx.stroke();
}

function dibujarExtremidades(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.rotate(20 * Math.PI / 180);
    ctx.fillRect(330, 160, 5, 30);
    ctx.rotate(-20 * Math.PI / 180);
    ctx.rotate(20 * Math.PI / -180);
    ctx.fillRect(155, 340, 5, 30);
    ctx.rotate(20 * Math.PI / 380);
    ctx.fillRect(203, 350, 5, 40);
    ctx.rotate(-20 * Math.PI / -380);
    ctx.fillRect(250, 310, 5, 40);
}



function dibujar(){
    let numeroFallos = getIntentosFallidos();
    for (let i = 1; i <= numeroFallos; i++) {
        switch(i){
            case 1:
                dibujarPalos(70,390,150,5);
                break;
            case 2:
                dibujarPalos(140,140,5,250);
                break;
            case 3:
                dibujarPalos(140,140,130,5);
                break;
            case 4:
                dibujarPalos(260,140,2,60);
                break;
            case 5: 
                dibujarCabezaTronco();
                break;
            case 6: 
                dibujarExtremidades();
                setTimeout(function(){
                    alert('Game over');
                    reiniciarAhorcado();
                }, 100);
                break;
        }   
    }

}

