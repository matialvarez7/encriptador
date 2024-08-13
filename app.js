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
        ocultarImagen();
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
        ocultarImagen();
    }else{
        alert("El texto debe incluir solo letras minúsculas")
    }
    
}

function botonCopiar(){
    if(resultado.value !== ""){
        copiar();
    }else{
        alert("No hay texto para copiar")
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

function copiar(){
    navigator.clipboard.writeText(resultado.value)
}

function ocultarImagen(){
    resultado.style.backgroundImage = "none";
}
