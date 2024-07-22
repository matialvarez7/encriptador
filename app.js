const minusculasRegEx = /^[a-z]+$/;

function validarTexto(texto){
    return minusculasRegEx.test(texto);
}

function encriptar(){
    // Recibir el texto del input
    let texto = document.getElementById('texto').value;
    // Validar que el texto contenga solo letras y en minuscula.
    // Si no está en minúscula o contiene números y caracteres especiales lanzar una alerta
    // Si stá en minúsucula se continua con la encriptación
    
}