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

/* let n = 7; //numero de imagenes
let carpeta = "products";
let div = document.getElementById('imagenes');
for (let i = 1; i<= n+1; i++){
  var image = new Image();
  image.src = carpeta + "/" + i + ".jpg";
  image.onerror = error;
  div.innerHTML += '<article class="article"> ' +
                      '<img src="' + image.src + '">' + 
                      '<a download="'+ image.src +'" href="'+image.src +'">Descargar</a>'
                    '</article>';
}

function error(e) {
  console.log(e)
  err = true
} */

let carpeta = "products";
let div = document.getElementById('imagenes');
var err = false;
let i = 1;
while(err == false)
{
  var image = new Image();
  image.src = carpeta + "/" + (i+1) + ".jpg";
  image.onerror = function(){
    err = true
  };
  div.innerHTML += '<article class="article"> ' +
                      '<img src="' + image.src + '">' + 
                      '<a download target="_blank" href="'+image.src +'">Descargar</a>'
                    '</article>';
  i = i+1;
  if (i > 7){
    err = true
  }
}

