var cuadrito = document.getElementById("areadibujo");
var papel = cuadrito.getContext("2d");
var estado = 0;
var colorLinea = 'lightblue';
var x, y;

document.addEventListener('mousedown', presionarMouse);
document.addEventListener('mouseup', soltarMouse);
document.addEventListener('mousemove', dibujarMouse);

dibujarLinea('red', 0, 0, 300, 0, papel);
dibujarLinea('red', 300, 0, 300, 300, papel);
dibujarLinea('red', 300, 300, 0, 300, papel);
dibujarLinea('red', 0, 300, 0, 0, papel);

function dibujarMouse(evento)
{
  if(estado == 1)
  {
    dibujarLinea(colorLinea, x, y, evento.layerX, evento.layerY, papel);
  }

  x = evento.layerX;
  y = evento.layerY;

}

function presionarMouse(evento)
{
  estado = 1;
  x = evento.layerX;
  y = evento.layerY;
}

function soltarMouse(evento)
{
  estado = 0;
  x = evento.layerX;
  y = evento.layerY;
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 2;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}