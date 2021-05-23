/* toggle mobile menu */

const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');

function toggleMenu(){
   if(menu.classList.contains('active')){  /* si el menu contiene una clase activada(osea algo activado) */
      menu.classList.remove('active'); /* entonces que quite este algo activado(lo cierra) */
      toggle.querySelector('a').innerHTML = "<i class='fas fa-bars'></i>"; /* y cambie el <a> por 3 barras */
      console.log('menu cerrado')
} else{
    menu.classList.add('active');/* no esta activado, pues activalo */
    toggle.querySelector('a').innerHTML = "<i class='fas fa-times'></i>"; /* cambia las 3 barras por X  */
    console.log('menu abierto')
    }
}

toggle.addEventListener('click', toggleMenu, false);

/* menu scroll down */
let ubicacionPrincipal  = window.pageYOffset;
window.onscroll = function() {
    let Desplazamiento_Actual = window.pageYOffset;
    if(ubicacionPrincipal >= Desplazamiento_Actual){
        document.getElementById('navbar').style.top = '0';
    }
    else{
        document.getElementById('navbar').style.top = '-5em';
    }
    ubicacionPrincipal = Desplazamiento_Actual;
}