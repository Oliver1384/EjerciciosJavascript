/**
 * Contiene los botones y su respectiva acción al ser pulsados
 */
function init() {
    let saludar = document.getElementById('saludar');
    saludar.addEventListener('click', saludo);

    let adivina = document.getElementById('adivina');
    adivina.addEventListener('click', adivinaNumero);

    let generarNum = document.getElementById('generarNum');
    generarNum.addEventListener('click', generarSeisNumeros);

    let tryCatch = document.getElementById('tryCatch');
    tryCatch.addEventListener('click', redirigirUsuario);

    let tryCatchThrow = document.getElementById('tryCatchThrow');
    tryCatchThrow.addEventListener('click', comprobarNumero);
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


/**
 * Función del ejercicio Saludo
 */
function saludo(){
    let nombre = document.getElementById('nombre').value;
    let resultadoEjSaludo = document.getElementById('resultadoEjSaludo');
    if (nombre !== ''){
        let negrita = document.createElement('b');
        let nombreNegrita = document.createTextNode(`${nombre}`);
        negrita.appendChild(nombreNegrita);
        removeAllChilds(resultadoEjSaludo);
        let resultado1 = document.createTextNode(`Hola `);
        resultadoEjSaludo.append(resultado1);
        resultadoEjSaludo.append(negrita);
        let resultado2 = document.createTextNode(`, yo soy PENTIUM 4`);
        resultadoEjSaludo.append(resultado2);
    } else {
        let resultado = document.createTextNode(`¿Quien eres?`);
        removeAllChilds(resultadoEjSaludo);
        resultadoEjSaludo.append(resultado);
    }
}

/**
 * Función del ejercicio "Adivinar un número"
 */
function adivinaNumero(){
    let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    let estadoBucle = true;
    let iteracion = 1;
    while (estadoBucle && iteracion <= 3) {
        let numeroUsuario = window.prompt("Introduzca un número comprendido entre 1 y 100");
        if (numeroUsuario === null){
            iteracion = 4;
            estadoBucle = false;
        } else if(numeroUsuario === ''){
            alert(`porfavor, indique un número`);
            iteracion--;
        } else {
            let parseNumreoUsuario = parseInt(numeroUsuario);
            if (iteracion === 3) {
                alert(`Lo sentimos, ha superado el número de intentos, el número era el ${numeroAleatorio}`);
            } else if (parseNumreoUsuario === numeroAleatorio) {
                alert('Enhorabuena, lo ha adivinado en el intento '+ iteracion);
                estadoBucle = false;
            } else {
                if (numeroAleatorio > parseNumreoUsuario){
                    alert('Inténtelo con un número mayor, intento '+iteracion);
                } else {
                    alert ('Inténtelo con un número menor, intento '+iteracion);
                }
            }
        }
        iteracion++;
    }
}

/**
 * Función del ejercicio "Lotería primitiva"
 */
function generarSeisNumeros() {
    let resultadoEjPrimitiva = document.getElementById('resultadoEjPrimitiva');
    let stringResultado = '';
    for (let i = 0; i < 6; i++) {
        let numeroAleatorio = Math.floor(Math.random() * 49) + 1;
        stringResultado += `${numeroAleatorio} `;
    }
    removeAllChilds(resultadoEjPrimitiva);
    let resultado = document.createTextNode(stringResultado);
    resultadoEjPrimitiva.append(resultado);
}

/**
 * Función del ejercicio "Control de errores try_catch"
 */
function redirigirUsuario() {
    try {
        if(!confirm("Puede hacer clic en 'Aceptar' para continuar en la página o clic en 'Cancelar' para volver a la página principal")){
            alert("Se te va a redirigir a la página principal");
        } 
    } catch(e){
        alert(e.message);
    }
   
}

/**
 * Función del ejercicio "Control de errores try_catch_throw"
 */
function comprobarNumero(){
    let numeroUsuario = window.prompt("Introduzca un número comprendido entre 5 y 10");
    if (numeroUsuario === ''){
        alert('debe indicar un número');
    } else if (numeroUsuario !== null) {
        try {
            if(isNaN((numeroUsuario))){
                throw new Error("No has introducido un número");
            } else if (!(parseInt(numeroUsuario) <= 10)) {
                throw new Error("El número es mayor que 10");
            } else if (!(parseInt(numeroUsuario) >=5)){
                throw new Error("El número es menor que 5");
            } else {
                alert('El número es válido');
            }
        } catch (e) {
            alert(e.message);
        }
    }
}