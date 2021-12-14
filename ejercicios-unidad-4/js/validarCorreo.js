function init() {
    let botonValidarCorreo = document.querySelector('.botonValidarCorreo');
    botonValidarCorreo.addEventListener('click',validarMailGrupo);
}
document.addEventListener("DOMContentLoaded", init);

function validarMailGrupo(){
    let mail = document.querySelector('#correoInput').value;
    var patron=/^([a-zA-Z0-9!#$%&'*_+-]([\.]?[a-zA-Z0-9!#$%&'*_+-])+@[a-zA-Z0-9]([^@&%$\/()=?¿!.,:;]|\d)+[a-zA-Z0-9][\.][a-zA-Z]{2,4}([\.][a-zA-Z]{2})?)+$/;
    alert ((mail.search(patron)=== 0) ? `La dirección de correo ${mail} es correcta.` : `La dirección de correo ${mail} es incorrecta.`);
}