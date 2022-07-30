var botonenc=document.querySelector("#boton_des");

botonenc.addEventListener("click",function(event){
    event.preventDefault();
    var formulario=document.querySelector(".formulario");
        
    var texto=formulario.eltex.value;
    var tex_arr= Array.from(texto);
    var texorg="";

    if(validatexto(texto)){

        for(var x=0;x<=tex_arr.length-1;x++){
            var letra_eva=tex_arr[x];
            switch (letra_eva) {
                case "e":
                    if (tex_arr[x]+tex_arr[x+1]+tex_arr[x+2]+tex_arr[x+3]+tex_arr[x+4]=="enter") {
                        texorg=texorg+"e";
                        x=x+4;
                    }
                    break;
                case "i":
                    if(tex_arr[x]+tex_arr[x+1]+tex_arr[x+2]+tex_arr[x+3]=="imes"){
                        texorg=texorg+"i";
                        x=x+3;
                    }
                    break;
                case "a":
                    if(tex_arr[x]+tex_arr[x+1]=="ai"){
                        texorg=texorg+"a";
                        x=x+1;
                    }
                    break;
                case "o":
                    if((tex_arr[x]+tex_arr[x+1]+tex_arr[x+2]+tex_arr[x+3])=="ober"){
                        texorg=texorg+"o";
                        x=x+3;
                    }
                    break;
                case "u":
                    if((tex_arr[x]+tex_arr[x+1]+tex_arr[x+2]+tex_arr[x+3])=="ufat"){
                        texorg=texorg+"u";
                        x=x+3;
                    }
                    break;
                default:
                    texorg=texorg+letra_eva;
                    break;
            }

            if(x>tex_arr.length){
                break;
            }
        };
        formulario.textoe.value=texorg; 
    };
});