// Ici nous allons chercher la deuxième image
function changeImage(img){
  document.getElementById(img).src ='assets/img/' + img + '_2.jpg';
}
// et ici nous allons récupérer la première image
function resetImage(img){
  document.getElementById(img).src ='assets/img/' + img + '.jpg';
}
