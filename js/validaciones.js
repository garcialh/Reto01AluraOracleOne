
function validatexto(texto){

    var tex_arr= Array.from(texto);
    var mensaje="";

    
    if (mensaje==""){
        for(var x=0;x<tex_arr.length;x++){
            var letra=tex_arr[x];
            if(letra!=" " && letra!="!"){
                if (letra==letra.toUpperCase()) {
                    mensaje="El texto no puede contener letras mayusculas o caracteres invalidos.";
                    break;
                };
            };
        };
    };

    if(mensaje.length>0){
        alert(mensaje);
    }

    return mensaje=="";
        
}
