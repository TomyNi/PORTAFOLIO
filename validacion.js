const nombre = document.getElementById("name");
const correo = document.getElementById("email");
const asunto = document.getElementById("affair");
const mensaje = document.getElementById("message");
const formulario = document.getElementById("form");
const alerta = document.getElementById("warnings");

formulario.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = "";
    let entrar = false;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    
    alerta.innerHTML = "";
    
    if(nombre.value.length <= 0){
        warnings += `El nombre no es valido <br>`;
        entrar = true;
    }else if(nombre.value.length > 50){
                warnings += `El nombre no es valido <br>`;
                entrar = true;
    }   

    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido <br>`;
        entrar = true;
    }

    if(asunto.value.length <= 0){
        warnings += `El asunto no es valido <br>`;
        entrar = true;
    }else if(asunto.value.length > 50){
        warnings += `El nombre no es valido <br>`;
        entrar = true;
    }   

    if(mensaje.value.length <= 0){
        warnings += `El mensaje no es valido <br>`;
        entrar = true;
    }else if(mensaje.value.length > 300){
                warnings += `El nombre no es valido <br>`;
                entrar = true;
    }   

    if(entrar){
        alerta.innerHTML = warnings;
    } else{
        alerta.innerHTML = "Enviado!";
    }
})