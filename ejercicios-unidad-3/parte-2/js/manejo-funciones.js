function init() {
    //Ejercicio A
    let botonFactorial = document.getElementById("botonFactorial");
    botonFactorial.addEventListener("click",factorial);

    //Ejercicio B
    let intercambiarValor = document.getElementById("intercambiarValor");
    let intercambiarReferencia = document.getElementById("intercambiarReferencia");
    intercambiarValor.addEventListener('click',realizarIntercambioValor);
    intercambiarReferencia.addEventListener('click',realizarIntercambioReferencia);
    
    //Ejercicio C
    let botonSumar = document.getElementById("botonSumar");
    botonSumar.addEventListener("click",suma);

    //Ejercicio D
    let tresParametros = document.getElementById("tresParametros");
    let unParametroDefecto = document.getElementById("unParametroDefecto");
    let dosParametroDefecto = document.getElementById("dosParametroDefecto");
    tresParametros.addEventListener('click', () => {
            informacion('Pepe','Madrid',23.45); 
        }
    );
    unParametroDefecto.addEventListener('click', () => {
        informacion('Pepe','Madrid'); 
        }
    );
    dosParametroDefecto.addEventListener('click', () => {
        informacion('Pepe'); 
        }
    );

    //Ejercicio E   
    let botonFactorialRecursiva = document.getElementById("botonFactorialRecursiva");
    botonFactorialRecursiva.addEventListener('click',calcularFactorialRecursivo);
}

document.addEventListener("DOMContentLoaded", init);


//Elimina todos los hijos del elemento pasado por parámetro
function removeAllChilds(element) {
    while (element.firstChild) {
            element.removeChild(element.firstChild);
    }
}

/**
 * Ejercicio A
 */
function factorial(){
    let numero = parseInt(document.getElementById("numeroFactorial").value);
    let resultadoFactorial = document.getElementById("resultadoFactorial");
    let resultado = "";
    if(!(numero > 0 && typeof(numero) == "number" && Number.isInteger(numero))){
        resultado = "El valor del número no es válido";
    } else {
        total = 1;
        if (!(numero == 0 || numero == 1)){
          for(var i = numero; i >= 1; i--){
            total = total * i;
          }
        }  
        resultado = total;
    }
    let contenido = document.createTextNode(resultado);
    removeAllChilds(resultadoFactorial);
    resultadoFactorial.appendChild(contenido);
}

/**
 * Ejercicio B
 */
function realizarIntercambioValor(){
    let numero1 = document.getElementById("numeroUnoValorReferencia").value;
    let numero2 = document.getElementById("numeroDosValorReferencia").value;

    document.getElementById("numeroUnoValorReferencia").value = numero2;
    document.getElementById("numeroDosValorReferencia").value = numero1;
}

function realizarIntercambioReferencia(){
    let numeroPrimerCampo = document.getElementById("numeroUnoValorReferencia").value;
    let numeroSegundoCampo = document.getElementById("numeroDosValorReferencia").value;

    let objetoNumero = {numero1:numeroPrimerCampo, numero2:numeroSegundoCampo};
    let objetoNumero2 = objetoNumero;

    objetoNumero.numero1 = numeroSegundoCampo;
    objetoNumero.numero2 = numeroPrimerCampo;

    document.getElementById("numeroUnoValorReferencia").value = objetoNumero2.numero1;
    document.getElementById("numeroDosValorReferencia").value = objetoNumero2.numero2;
}


/**
 * Ejercicio C
 */
function suma(){
    let numeros = document.getElementById("numerosArgumentosVariables").value;
    let resultadoSumaArgumentosVariables = document.getElementById("resultadoSumaArgumentosVariables");
    numeros = numeros.split(",");
    for(let i = 0; i < numeros.length; i++){
        numeros[i] = parseFloat(numeros[i]);
    }
    let soloNumeros = (val) => {
        if (typeof(val)==='number'){
            return val;
        }
    }
    numeros = numeros.filter(soloNumeros);
    let total = 0;
    numeros.forEach(numero => total +=numero);
    let contenido = document.createTextNode(total);
    removeAllChilds(resultadoSumaArgumentosVariables);
    resultadoSumaArgumentosVariables.appendChild(contenido);
}


/**
 * Ejercicio D
 */
function informacion(nombre, localidad="Las Palmas de G.C.", valor=100){
    let texto = `${nombre} ${localidad} ${valor}`;
    let informacionParametrosDefecto = document.getElementById("informacionParametrosDefecto");
    removeAllChilds(informacionParametrosDefecto);
    let contenido = document.createTextNode(texto);
    informacionParametrosDefecto.appendChild(contenido);
}


/**
 * Ejercicio E   
 */
function factorialRecursivo (valor) { 
    if (valor == 0){ 
        return 1; 
    }
    return valor * factorialRecursivo (valor-1); 
}

function calcularFactorialRecursivo(){
    let numero = parseInt(document.getElementById("numeroFactorialRecursiva").value);
    let resultadoFactorialRecursiva = document.getElementById("resultadoFactorialRecursiva");
    let resultado = "";
    if(!(numero > 0 && typeof(numero) == "number" && Number.isInteger(numero))){
        resultado = "El valor del número no es válido";
    }
    resultado = factorialRecursivo(numero);
    let contenido = document.createTextNode(resultado);
    removeAllChilds(resultadoFactorialRecursiva);
    resultadoFactorialRecursiva.appendChild(contenido);
}