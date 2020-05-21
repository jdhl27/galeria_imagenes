/* var carpeta = "products";
var images = ["1.jpeg", "2.jpg", "3.png"];
var div = document.getElementById('imagenes')
images.forEach(function(img) {
  var image = new Image();
  image.src = carpeta + "/" + img;
  image.onerror = error;

  var cadena = '<img src="'+image.src+'">';
  div.innerHTML += cadena;
});

function error(e) {
  console.log(e)
} */

/* var imagen=1;
var div = document.getElementById('imagenes')
var erro = false
while(erro == false)
{
   erro == false
   var carpeta= "products";
   var img = new Image();
   img.src = carpeta+"/"+imagen+".jpg";
   img.onerror = error(imagen);
   imagen++;

   var cadena = '<article class="article"><img src="'+img.src+'"></article>';
   div.innerHTML += cadena;
}

function error(numero)
{
  erro = true;
  total=numero
  console.log(total);
  
} */

let n = 9; // Numero de imagenes
let carpeta = "products"; // Nombre de la carpeta
let divImages = document.getElementById('imagenes'); // Haciendo 
for (let i = 1; i<= n; i++){
  var image = new Image();
  image.src = carpeta + "/" + i + ".jpg";
  image.onerror = error;
  divImages.innerHTML += '<article class="article"> ' +
                      '<img src="' + image.src + '">' + 
                      '<a download target="_blank" href="'+image.src +'">Descargar</a>'
                    '</article>';
}

let divErrores = document.getElementById('errores');
function error(e) {
  divErrores.innerHTML += '<h4>~ La siguiente imagen presenta algún error: ' + e.path[0].src+'</h4>';
} 



