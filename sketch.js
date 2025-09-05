var x = 0;
var y = 0;
var canvas; /* var: declara variable y podemos asignarles un valor a contener, = significa asignación, == es igual, ! si algo es distinto a otro, const: es una constante, let son variables que se utilizan en un contexto determinado*/

function setup() { /* se puede agregar un valor al parentecis */
  canvas = createCanvas(windowWidth, windowHeight);/* canvas es el nombre de nuestra variable, no puede iniciar con numero, ñ, ni tilde */
  canvas.parent("cuerpo");
  canvas.position(0,0);
  canvas.style('z-index','-1');
  background(26, 26, 26);
  noStroke();
   frameRate (12); /* define la rapidez*/
}

function draw() { /* function draw crea el loop*/
  // Use HSB color with values in the range 0-100.
  colorMode(HSB, 359, 100, 100);
  background(map(mouseX, 0, windowWidth, 0, 360), 50, 100);
/*Canbia de function a abajo para detener que me sigan varias patitas*/
  x = lerp(x, mouseX, 0.1);
  y = lerp(y, mouseY, 0.1);
  fill("white");
  textSize(random(100,200));/*podemos generara una variable en el tamaño de el emoji*/
  text("😼",x,y); 

} 