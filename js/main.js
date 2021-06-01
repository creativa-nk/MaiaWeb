/* toggle mobile menu */

const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');

function toggleMenu(){
   if(menu.classList.contains('active')){  /* si el menu contiene una clase activada(osea algo activado) */
    closeNav() // ejecutar la funcion closeNav(),  mirar mas abajo
} else{
    menu.classList.add('active');/* no esta activado, pues activalo */
    toggle.querySelector('a').innerHTML = "<i class='fas fa-times'></i>"; /* cambia las 3 barras por X  */
    console.log('menu abierto')
    }
}

toggle.addEventListener('click', toggleMenu, false);


function closeNav(){
    menu.classList.remove('active'); /* entonces que quite este algo activado(lo cierra) */
      toggle.querySelector('a').innerHTML = "<i class='fas fa-bars'></i>"; /* y cambie el <a> por 3 barras */
      console.log('menu cerrado')
}

/* menu scroll down */ // !!!!!!!!!menu aparece y desaparece haciendo scroll!!!!!!!!!!!!!!!!!
/* let ubicacionPrincipal  = window.pageYOffset;
window.onscroll = function() {
    let Desplazamiento_Actual = window.pageYOffset;
    if(ubicacionPrincipal >= Desplazamiento_Actual){
        document.getElementById('navbar').style.top = '0';
        document.getElementById("navbar").style.backgroundColor = "rgba(80, 80, 80, 0.5)  ";
    }
    else{
        document.getElementById('navbar').style.top = '-5em';
    }
    ubicacionPrincipal = Desplazamiento_Actual;
} */


//cuando usamos el scrolls down 50px desde arriba, la barra de nav cambia de color
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    document.getElementById("navbar").style.backgroundColor = "rgba(80, 80, 80, 0.6) ";
    document.querySelectorAll('.nav_item').style.color = "red";
  } else {
    document.getElementById("navbar").style.backgroundColor = "rgba(80, 80, 80, 0.157) ";
  }
}

/*--------- ABOUT US --------- */
function vermas(id){
    if(id=="mas"){
    document.getElementById("desplegar").style.display="block";   
    document.getElementById("mas").style.display="none"; 
    }
    else{
    document.getElementById("desplegar").style.display="none";
    document.getElementById("mas").style.display="inline";
    }
}