/* var carpeta = "products";
var images = ["1.jpg", "2.jpg", "3.jpg, 4.jpg", "5.jpg", "6.jpg, 7.jpg"];
var div = document.getElementById('imagenes')
images.forEach(function(img) {
  var image = new Image();
  image.src = carpeta + "/" + img;
  image.onerror = error;
  divImages.innerHTML += '<article class="article"> ' +
                      '<img src="' + image.src + '">' + 
                      '<a download target="_blank" href="'+image.src +'">Descargar</a>'
                    '</article>';
});

let divErrores = document.getElementById('errores');
function error(e) {
  divErrores.innerHTML += '<h4>~ La siguiente imagen presenta algún error: ' + e.path[0].src+'</h4>';
}  */

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



