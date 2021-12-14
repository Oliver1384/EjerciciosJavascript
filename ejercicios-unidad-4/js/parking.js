function init() {
    let precio = document.getElementById('precioAparcamiento');
    precio.addEventListener('click', comprobarFecha);
    let botonReiniciar = document.getElementById('reiniciarAparcamiento');
    botonReiniciar.addEventListener('click',reiniciar);
}
document.addEventListener("DOMContentLoaded", init);

function comprobarFecha(){
    let fechaEntrada = Date.parse(document.getElementById('fechaEntrada').value); //correcto
    let fechaHoraActual = Date.parse(new Date()); //correcto
    let tiempoMaquina = new Date();
    agregarResultado('salidaParking',` ${tiempoMaquina.getDate()}/${tiempoMaquina.getMonth()}/${tiempoMaquina.getFullYear()} ${tiempoMaquina.getHours()}:${tiempoMaquina.getMinutes()}`);
    if (fechaEntrada >= fechaHoraActual || isNaN(fechaEntrada)){
        alert('La fecha es posterior a este momento o contiene un formato no válido');
    } else {
        let minutos = Math.floor((((fechaHoraActual-fechaEntrada)*0.001)*(1/60)));
        let horas = Math.floor(minutos/60);
        minutos = minutos - horas*60;
        let costeTotal = 0;
        if (horas === 0){
            costeTotal += (1.2*minutos)/60;
            minutos = 0;
        }
        if (horas > 0 && horas < 13){ //la primera hora de 1.2 solo se aplica si esta menos de 13 horas
            horas = horas -1;
            costeTotal += 1.2;
        }
        while (Math.floor(horas/24) > 0){
            horas -= 24;
            costeTotal += 20;
        }
        if (horas > 12){ // a partir de las 13 horas se supera el límite de 20eur
            costeTotal += 20;
        } else {
            for (let i = 0; i < horas; i ++){
                costeTotal += 1.5;
            }
            costeTotal += (1.5*minutos)/60;
        }
        agregarResultado('costeTotalParking',`${Math.round(costeTotal*100)/100} eur.`);
    }

}

function agregarResultado(idContenedor, texto){
    let contenedor = document.getElementById(idContenedor);
    eliminarDatosAnteriores(contenedor);
    let contenido = document.createTextNode(texto);
    contenedor.appendChild(contenido);
}

function reiniciar(){
    document.getElementById('fechaEntrada').value = '';
    agregarResultado('salidaParking',` dd/mm/aaaa hh:mm`);
    agregarResultado('costeTotalParking',`0 eur`);
}

function eliminarDatosAnteriores(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}
