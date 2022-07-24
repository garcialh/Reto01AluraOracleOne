var botonenc=document.querySelector("#boton_des");

botonenc.addEventListener("click",function(event){
    event.preventDefault();
    var formulario=document.querySelector(".formulario");
    
    console.log(formulario.eltex.value);
    formulario.textoe.value="des-encriptado" + formulario.eltex.value;
})