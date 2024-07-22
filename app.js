const minusculasRegEx = /^[a-z\s]+$/;
const vocales = ["a", "e", "i", "o", "u"];
let llavesDeEncriptacion = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat" 
};

console.log(llavesDeEncriptacion["a"])

// Verifica si el texto que recibe contiene solamente minúsculas.
function validarTexto(texto){
    return minusculasRegEx.test(texto);
}

function encriptar(){
    // Recibir el texto del input
    let texto = document.getElementById('texto').value;
    let textoCifrado = "";
    // Validar que el texto contenga solo letras y en minuscula.
    if(validarTexto(texto)){
        // Se tiene que verificar cada caracater de la cadena de texto
        for(let i = 0; i < texto.length; i++){
            if(vocales.includes(texto[i])){
                textoCifrado += llavesDeEncriptacion[texto[i]];
            }else{
                textoCifrado += texto[i];
            }
        }
        // En caso de que sean consonates no modifican su valor final.
        // En caso de que sean vocales se debe reemplazar con la llave de encriptación correspondiente.
        // Una vez recorrido todo el texto se debe devolver con la encriptación correspondiente.
    }else{ // Si no está en minúscula o contiene números y caracteres especiales lanzar una alerta
        alert("El texto debe contener solo letras minúsculas")
        return
    }
    console.log(textoCifrado)
 
}