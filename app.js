var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");

function dibujoPorClick()
{
var xxx = parseInt(texto.value);
var lineas = xxx;
var l = 0;
var yi, xf;
var colorcito = "#FAA"
var espacio = ancho / lineas;

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath(); //funcion que arranca el dibujo
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke(); //hecho de trazar la raya
  lienzo.closePath(); //funcion que termina el dibujo, evita que la siguiente linea parta desde este punto
}

//while(l < lineas)
for(l = 0; l < lineas; l++)
{
yi = espacio*l;
xf = espacio*(l+1);
dibujarLinea(colorcito, 0, yi, xf, 300);
//l += 1;
}

dibujarLinea(colorcito, 1,1,1,300);
dibujarLinea(colorcito, 1,300,299,299);

for(l = 0; l < lineas; l++)
{
yi = espacio*l;
xf = espacio*(l+1);
dibujarLinea(colorcito, 300, yi, xf, 0);
}

dibujarLinea(colorcito, 300,1,1,1);
dibujarLinea(colorcito, 299,299,300,1);
}
