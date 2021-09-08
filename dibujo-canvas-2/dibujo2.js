var texto = document.getElementById("txt_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujarPorClick );
texto.addEventListener("keyup", function(event){
     if (event.code == "Enter") {
          event.preventDefault();
          boton.click();
     }
})

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho = d.width;
var largo = d.height;

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}



 function dibujarPorClick()   
 {
    lienzo.clearRect(0, 0, ancho, largo);
     var lineas = parseInt(texto.value);
     var l = 0;
     var yi, xf;
     var xi, yf;
     var colorcito =  "#5F021F";
     var espacio = ancho / lineas;
     
     for(l=0; l < lineas; l++)
    {
         yi = espacio * l;
         xf = espacio * (l + 1);
         dibujarLinea(colorcito, 0, yi, xf, 300);
         console.log("lineas" + l++);
    }
         dibujarLinea (colorcito, 1, 1, 1, 299);
         dibujarLinea (colorcito, 1, 299, 299, 299);
    
 }