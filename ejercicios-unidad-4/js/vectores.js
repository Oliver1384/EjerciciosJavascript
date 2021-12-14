function init() {
    let botonVerVector = document.getElementById('botonVerVector');
    let botonOrdenarVector = document.getElementById('botonOrdenarVector');
    let botonInvertirVector = document.getElementById('botonInvertirVector');

    botonVerVector.addEventListener('click',mostrarVector);
    botonOrdenarVector.addEventListener('click', ordenarVector);
    botonInvertirVector.addEventListener('click',invertirVector);
}
document.addEventListener("DOMContentLoaded", init);

function formatearMinuscula(palabra){
    let palabraMinuscula = '';
    for (let i = 0; i < palabra.length;i++){
        letra = palabra.charAt(i).toLowerCase();
        palabraMinuscula += letra;
    }
    return palabraMinuscula;
}

function ordenarVector(){
    let array = document.querySelector('#textoVectores').value;
    let objetoClasificacion = {
        palabras:[],
        numeros:[]
    };
    array = array.split(',');
    array.forEach(value => {
       if(isNaN(value)){
           objetoClasificacion.palabras.push(formatearMinuscula(value));
       } else {
           objetoClasificacion.numeros.push(parseInt(value));
       }
    });

    eliminarVector();
    objetoClasificacion.palabras =   ordenar(objetoClasificacion.palabras);
    agregarVector('.resultadoVectores', objetoClasificacion.palabras );
    agregarVector('.resultadoVectores',',')
    objetoClasificacion.numeros = ordenar(objetoClasificacion.numeros);
    agregarVector('.resultadoVectores', objetoClasificacion.numeros);

    return objetoClasificacion;
}

function invertirVector(){
    let palabras = ordenarVector().palabras;
    let numeros = ordenarVector().numeros;
    eliminarVector();
    palabras = palabras.reverse();
    numeros = numeros.reverse();
    agregarVector('.resultadoVectores',palabras);
    agregarVector('.resultadoVectores',',')
    agregarVector('.resultadoVectores',numeros);
}

function agregarVector(selector, texto){
    let contenedor = document.querySelector(selector);
    let contenido = document.createTextNode(texto);
    contenedor.appendChild(contenido);
}

function eliminarVector() {
    let element = document.querySelector('.resultadoVectores');
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

function mostrarVector(){
    eliminarVector();
    let vector = document.querySelector('#textoVectores').value;
    vector = vector.split(',');
    agregarVector('.resultadoVectores',vector);
}

function ordenar(array){
   return array.sort(function (a, b) {
                if (a > b) {
                    return 1;
                }
                if (b > a) {
                    return -1;
                }
                return 0;
            });
}