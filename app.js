// regular expresion para validar que el texto solo incluya palabras con letras minúsculas
const minusculasRegEx = /^[a-z\s]+$/;
const mensaje = document.getElementById('texto');
const resultado = document.getElementById('resultado');
const llavesDeEncriptacion = new Map([
    ['a', 'ai'],
    ['e', 'enter'],
    ['i', 'imes'],
    ['o', 'ober'],
    ['u', 'ufat'],
]);

// Verifica si el texto que recibe contiene solamente minúsculas.
function validarTexto(texto){
    return minusculasRegEx.test(texto);
}

function botonEncriptar(){
    let textoAEncriptar = mensaje.value;
    if(validarTexto(textoAEncriptar)){
        resultado.value = encriptar(textoAEncriptar);
        mensaje.value = "";
        console.log(textoAEncriptar);
    }else{
        alert("El texto debe incluir solo letras minúsculas")
    }
    
}

function botonDesencriptar(){
    let textoADesencriptar = mensaje.value;
    if(validarTexto(textoADesencriptar)){
        resultado.value = desencriptar(textoADesencriptar);
        mensaje.value = "";
    }else{
        alert("El texto debe incluir solo letras minúsculas")
    }
    
}

function encriptar(texto){
    let textoCifrado="";
    for(let i = 0; i < texto.length; i++){
        if(llavesDeEncriptacion.has(texto[i])){
            textoCifrado += llavesDeEncriptacion.get(texto[i]);
        }else{
            textoCifrado += texto[i];
        }
    }
    return textoCifrado
}

function desencriptar(texto){
    for (const [key, value] of llavesDeEncriptacion.entries()) {
        if(texto.includes(value)){
            texto = texto.replaceAll(value, key)    
        }
    }
    return texto
}


for (const [key, value] of llavesDeEncriptacion.entries()) {
    console.log(`${key}: ${value}`);
  }

// En caso de que sean consonates no modifican su valor final.
// En caso de que sean vocales se debe reemplazar con la llave de encriptación correspondiente.
// Una vez recorrido todo el texto se debe devolver con la encriptación correspondiente.
