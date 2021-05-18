
// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("nav").style.backgroundColor = "white";
    document.getElementsByClassName('btn-menu').style.color ='black';
  } else {
    document.getElementById("nav").style.backgroundColor = "transparent";
    document.getElementsByClassName("menu_bar").style.backgroundColor = "transparent";
  }
}




/* ----NAV---- */

function Mostrar(){
  document.getElementById('navegacion').style.display='block';
}
function Ocultar(){
  document.getElementById('navegacion').style.display='none'
}



function Mostrar_Ocultar(){
  var menu = document.getElementsById('navegacion');

  if(menu.style.display == 'none'){
    Mostrar()
  }else{
    Ocultar()
  }
}
