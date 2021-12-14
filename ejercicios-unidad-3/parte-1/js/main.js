function init() {
    //Ejercicio 1
    let calculoAritmetico = document.getElementById('botonCalculoAritmetico');
    calculoAritmetico.addEventListener('click', operacionAritmetica);

    //Ejercicio 2.2
    let comparar = document.getElementById('comparar');
    comparar.addEventListener('click', function (){
        let num1 = document.getElementById('firstNum').value
        let num2 = document.getElementById('secondNum').value
        let result = numeroMayorMenor(num1, num2);
        var resultadoSuma = document.getElementById("resultadoSuma");
        var textoSuma = (result != '') ? document.createTextNode(result) : document.createTextNode('');
        removeAllChilds(resultadoSuma);
        resultadoSuma.appendChild(textoSuma);
    });

    //Ejercicio 2.3
    let mostrarAntesDespues = document.getElementById('mostrarAntesDespues');
    mostrarAntesDespues.addEventListener('click', aplicarFuncion);

    //Ejercicio 3
    forClasico();
    bucleForEach();
    bucleForIn();
    bucleForOf();
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
 * Ejercicio 1: Realizar un programa que solicite al usuario el resultado de una operación
 * aritmética dada. Utilizar dos funciones. La primera captura el resultado introducido por
 * el usuario e invoca otra función que verifica si el resultado es correcto. En esta segunda
 * función utilizaremos return para devolver el resultado.
 */
function operacionAritmetica(){
    let base = Math.floor(Math.random() * 9) + 1;
    let exponente = Math.floor(Math.random() * 9) + 1;
    let numero = Math.floor(Math.random() * 100) + 1;
    let resultadoUsuario = window.prompt(`¿Cuál es el resultado de ${numero} + ${base}^${exponente}?`);
    var correccionOperacion = document.getElementById("correccionOperacion");
    removeAllChilds(correccionOperacion);
    if (resultadoUsuario != null) {
        let correccion = operacionAritmeticaComprobarResultado(resultadoUsuario,base,exponente,numero);
        var textoCorreccion = document.createTextNode(correccion);
     
        correccionOperacion.appendChild(textoCorreccion);
    }
}

function operacionAritmeticaComprobarResultado(resultadoUsuario,base,exponente,numero){
    let resultado = parseInt(numero)+parseInt(Math.pow(base,exponente));
    resultadoUsuario = parseInt(resultadoUsuario);
    let correccion = (resultadoUsuario == resultado) ? 'Es correcto' : 'Es incorrecto';
    return correccion;

}


/**
 * Ejercicio 2
 */
//Apartado 2.1
function incrementarNumero(numero) {
    return numero+1;
}

//Apartado 2.2
function numeroMayorMenor(num1, num2){
    num1Parse = parseInt(num1);
    num2Parse = parseInt(num2);
    if (num1Parse > num2Parse) {
        alert(`El primer valor es mayor`);
        return '';
    } else {
        return num1Parse + num2Parse;
    }
}

//Apartado 2.3
function addNumbers() {
    firstNum = 4;
    secondNum = 8;
    result = firstNum + secondNum;
    return result;
}

function aplicarFuncion() {
    result = 0;
    alert(result);
    sum = addNumbers();
    alert(result);
}

/**
 * Ejercicio 3
 */
let frutas = ['pera','manzana','melocotón','sandía','platano','naranja','limón','coco'];

function crearFila(nombreContenedor, texto) {
    let fila = document.createElement('li');
    let contenidoFila = document.createTextNode(texto);
    fila.appendChild(contenidoFila);
    document.getElementById(nombreContenedor).appendChild(fila);
}

/**
 * [for]
 * Características: universalmente conocido, es muy rápido en performance, podemos utilizar
 * las propiedades nativas del 'for loop' (break, continue, etc.).
 */
function forClasico(){
    for (let i = 0; i < frutas.length; i++) {
        crearFila("resultadoFor",frutas[i]);
    }
}


/**
 * [forEach]
 * Características: Nos permite una sintáxis mucho más limpia cuando tenemos que aplicar una 
 * funcionalidad a cada valor del array.
 * Posee un retorno implícito. 
 * No permite utilizar continue y break.
 */
function bucleForEach(){
    frutas.forEach(fruta => {
        (fruta === 'naranja') ?  crearFila("resultadoForEach",`Las ${fruta}s están malas.`)  :  crearFila("resultadoForEach",`Tenemos ${fruta}`);
    });
}
/**
 * [for in]
 * Características: La sintáxis es limpia,itera sobre todas las propiedades enumerables de 
 * un objeto.
 * Es una ventaja si quieres conocer el índice de la variable, el lado negativo es que 
 * para acceder a la variable del array necesitas indicar el índice y el array.
 * Permite utilizar en break y el continue.
 */
 frutas.numero = 10;
function bucleForIn(){

    for (const index in frutas){
        if (frutas[index] === 'naranja'){
            continue;
        }
        crearFila("resultadoForIn",`La fruta ${frutas[index]} se encuentra en el índice ${index} del array`);
    }
}


/**
 * [for of]
 * Características: No muestra los elementos que se agregan al prototipo, ni propiedades
 * extras que no estén en el array original.
 * Permite utilizar en continue y el break.
 */
//removeAllChilds(nombreUl);
function bucleForOf() {
    for(const fruta of frutas){
        if (fruta === 'naranja'){
            continue;
        } else {
          crearFila("resultadoForOf",fruta);
        }
    }
}

