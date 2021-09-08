var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
document.addEventListener ("keydown", moverLobo);
//objetos jason
var fondo =
{
    url: "tile.png",
    cargaOK: false
};
var lobo =
{
	url: "lobo.png",
	carga: false
};
var vaca = 
{
 url: "vaca.png",
 cargaOK: false
};
var pollo =
{
    url: "pollo.png",
    cargaOK: false
};

var cerdo =
{
    url: "cerdo.png",
    cargaOK: false
};
//variables
var xLobo = 150;
var yLobo = 100;

var xVaca = [];
var yVaca = [];

var xCerdo = [];
var yCerdo = [];

var xPollo = [];
var yPollo = [];

//sources
fondo.imagen = new Image(); 
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

lobo.imagen = new Image ();
lobo.imagen.src = lobo.url;
lobo.imagen.addEventListener("load", cargarLobo)

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);
 

 
//funciones
function random(min, maxi)
{
   var res;
   res = Math.floor(Math.random() * (maxi - min + 1)) + min
return res;
}

function moverLobo(e)
{
	var movimiento = 64;
	var teclas =
	{
		LEFT: 37,
		UP: 38,
		RIGHT: 39,
		DOWN: 40
	}
	switch(e.keyCode)
	{
		case teclas.LEFT:
			xLobo = xLobo - movimiento;
			dibujar(xLobo, yLobo);
		break;
		case teclas.UP:
			yLobo = yLobo - movimiento;
			dibujar(xLobo, yLobo);
		break;
		case teclas.RIGHT:
			xLobo = xLobo + movimiento;
			dibujar(xLobo, yLobo);
		break;
		case teclas.DOWN:
			yLobo = yLobo + movimiento;
			dibujar(xLobo, yLobo);
		break;
	}
}

function cargarLobo()
{
    lobo.carga= true;
    dibujar ();
}
function cargarFondo()
{
    fondo.carga= true;
    dibujar ();
}
function cargarVacas()
{
    vaca.carga= true;
    mantenerPosicion ();
}
function cargarCerdo()
{
    cerdo.carga= true;
    mantenerPosicion ();
}
function cargarPollo()
{
    pollo.carga= true;
    mantenerPosicion ();
}

function mantenerPosicion()
{
  if (vaca.carga)
  {
      var cantidad = random (1, 5);
      for (var i=0; i<cantidad; i++)
      {
          var x = random (0, 6);
		  var y = random (0, 6);
		  x = x*70
		  y = y*70
		  xVaca[i] = x;
		  yVaca[i] = y;
	  }
  }
  if(cerdo.carga)
	{
		var cantidad = random(1, 5);
		for(var i=0; i<cantidad; i++)
		{
			var x = random(0, 6);
			var y = random(0, 6);
			x = x*70;
			y = y*70;
			xCerdo[i] = x;
			yCerdo[i] = y; 		
		}
	}
	if(pollo.carga)
	{
		var cantidad = random(1, 10);
		for(var i=0; i<cantidad; i++)
		{
			var x = random(0, 6);
			var y = random(0, 6);
			x = x*70;
			y = y*70;
			xPollo[i] = x;
			yPollo[i] = y;
		}
	}
	dibujar();
}

function dibujar()
{
	if(fondo.carga)
	{
		papel.drawImage(fondo.imagen, 0, 0);
	}
	if(vaca.carga)
	{
		for(var i=0; i<10; i++)
		{
			papel.drawImage(vaca.imagen, xVaca[i], yVaca[i]);		
		}
	}
	if(cerdo.carga)
	{
		for(var i=0; i<10; i++)
		{
			papel.drawImage(cerdo.imagen, xCerdo[i], yCerdo[i]);		
		}
	}
	if(pollo.carga)
	{
		for(var i=0; i<10; i++)
		{
			papel.drawImage(pollo.imagen, xPollo[i], yPollo[i]);		
		}
	}
	if(lobo.carga)
	{
		papel.drawImage(lobo.imagen, xLobo, yLobo)
	}
}