
var botonenc=document.querySelector("#boton_enc");

botonenc.addEventListener("click",function(event){
    
    event.preventDefault();
    
    var formulario=document.querySelector(".formulario");
    var texto=formulario.eltex.value;
    var tex_arr= Array.from(texto);
    var tex_enc="";
    var tex_con="";

    tex_arr.forEach(function(letra){

        var letra_eva=letra;

        console.log(letra_eva);

        switch (letra_eva) {
            case "e":
                tex_con="enter";
                break;
            case "i":
                tex_con="imes";
                break;
            case "a":
                tex_con="ai";
                break;
            case "o":
                tex_con="ober";
                break;
            case "u":
                tex_con="ufat";
                break;
            default:
                tex_con=letra_eva;
                break;
        }

        tex_enc = tex_enc + tex_con;
        console.log(letra_eva+" - "+tex_con);

    });

    console.log(tex_arr);
    formulario.textoe.value=tex_enc;
})


