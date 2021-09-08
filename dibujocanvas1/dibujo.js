var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var yi, xf;
var xi, yf;
colorcito =  "#5F021F"


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

for(l=0; l < lineas; l++)
{
    yi = 10 * l;
    xf = 10 * (l + 1);
    dibujarLinea(colorcito, 0, yi, xf, 300);
    console.log("lineas" + l);
}

    dibujarLinea (colorcito, 1, 1, 1, 299);
    dibujarLinea (colorcito, 1, 299, 299, 299);

    for (l=0; l<lineas; l++)
    {
      yi = 300 - 10 * l;
      xf = 300-10*l;
      dibujarLinea (colorcito, 300, yi, xf, 1);
      console.log("lineas" + l);
    }
    
    dibujarLinea ("black", 0, 0, 300, 0);
    dibujarLinea ("black", 300, 0, 300, 300);
    dibujarLinea ("yellow", 300, 300, 0, 0);
    dibujarLinea ("yellow", 300, 300, 10, 0);
    dibujarLinea ("yellow", 300, 300, 0, 10);

    for (l=0; l<lineas; l+=2)
    {
      xi = 300;
      xf= l*10;
      dibujarLinea ("yellow", 300, 300, xf, 0);
    }
   
    for (l=0; l<lineas; l+=2)
    {
        xi = 300;
        yf= l*10;
        dibujarLinea ("yellow", 300, 300, 0, yf);
    }