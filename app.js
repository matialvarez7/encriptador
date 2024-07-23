const minusculasRegEx = /^[a-z\s]+$/;

const llavesDeEncriptacion = new Map([
    ['a', 'ai'],
    ['e', 'enter'],
    ['i', 'imes'],
    ['o', 'ober'],
    ['u', 'ufat'],
])

console.log(llavesDeEncriptacion["a"])

// Verifica si el texto que recibe contiene solamente minúsculas.
function validarTexto(texto){
    return minusculasRegEx.test(texto);
}

function encriptar(texto){

    // Recibir el texto del input
    let texto = document.getElementById('texto').value;
    let textoCifrado = "";
    // Validar que el texto contenga solo letras y en minuscula.
    if(validarTexto(texto)){
        // Se tiene que verificar cada caracater de la cadena de texto
        for(let i = 0; i < texto.length; i++){
            if(llavesDeEncriptacion.has(texto[i])){
                textoCifrado += llavesDeEncriptacion.get(texto[i]);
            }else{
                textoCifrado += texto[i];
            }
        }
    }else{ // Si no está en minúscula o contiene números y caracteres especiales lanzar una alerta
        alert("El texto debe contener solo letras minúsculas")
        return
    }
    console.log(textoCifrado)
 
}

function desencriptar(){
    let texto = document.getElementById('texto').value;
    let textoCifrado = texto;
    for (const [key, value] of llavesDeEncriptacion.entries()) {
        if(textoCifrado.includes(value)){
            textoCifrado = textoCifrado.replaceAll(value, key)    
        }
    }
    console.log(textoCifrado)
}


for (const [key, value] of llavesDeEncriptacion.entries()) {
    console.log(`${key}: ${value}`);
  }

// En caso de que sean consonates no modifican su valor final.
// En caso de que sean vocales se debe reemplazar con la llave de encriptación correspondiente.
// Una vez recorrido todo el texto se debe devolver con la encriptación correspondiente.

// const vocales = ["a", "e", "i", "o", "u"];
// let llavesDeEncriptacion = {
//     a: "ai",
//     e: "enter",
//     i: "imes",
//     o: "ober",
//     u: "ufat" 
// };

  
//     textoCifrado = texto
//         .replace(/enter/gi, "e")
//         .replace(/imes/gi, "i")
//         .replace(/ai/gi, "a")
//         .replace(/ober/gi, "o")
//         .replace(/ufat/gi, "u");

// let textoCifrado = texto
//     .replace(/e/gi, "enter")
//     .replace(/i/gi, "imes")
//     .replace(/a/gi, "ai")
//     .replace(/o/gi, "ober")
//     .replace(/u/gi, "ufat");