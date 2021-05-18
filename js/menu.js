/* $(document).ready(main);

var contador = 1;

function main(){
    $('.menu_bar').click(function(){
      /*  $('nav').toggle();  */  /* la manera sencilla */
      /*  if(contador == 1){
        $('nav').animate({
          left:'0'
        });
        contador = 0;
      }else{
        contador = 1;
        $('nav').animate({
          left:'-100%'
        });
      } 
});
} */ 


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