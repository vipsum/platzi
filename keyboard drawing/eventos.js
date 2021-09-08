var teclas = {
    UP: 38, DOWN: 40, LEFT: 37, RIGHT: 39
};

document.addEventListener("keydown", dibujarTeclado);
var cuadrito = document.getElementById("areadibujo");
var papel = cuadrito.getContext("2d");
var x = 10;
var y = 20;

dibujarLinea("pink", x-1, y-1, x+1, y+1, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarTeclado (evento)
{
  var movimiento = 5;
  switch(evento.keyCode)
  {
    case teclas.UP:
        var colorcito = "pink";
        dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
        y = y - movimiento;
        break;
    case teclas.DOWN:
        var colorcito1 = "violet";
        dibujarLinea(colorcito1, x, y, x, y + movimiento, papel);
        y = y+ movimiento;
        break;
    case teclas.LEFT:
        var colorcito2 = "orange";
        dibujarLinea(colorcito2, x, y, x - movimiento, y, papel);
        x = x - movimiento;
        break;
    case teclas.RIGHT:
        var colorcito3 = "green";
        dibujarLinea(colorcito3, x, y, x + movimiento, y, papel);
        x = x+ movimiento;
        break;
    default:
        console.log("otra tecla");
    break;
  }
}
