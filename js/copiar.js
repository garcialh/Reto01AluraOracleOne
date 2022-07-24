var botonenc=document.querySelector("#boton_cop");

botonenc.addEventListener("click",function(event){
    event.preventDefault();
    var formulario=document.querySelector(".formulario");
    formulario.textoe.select();
    var esok=document.execCommand("copy");
    if(esok){
        'Copiado!';
      } else {
        alert('No se pudo copiar!');  
      }

      
    
})