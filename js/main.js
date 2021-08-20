/* toggle mobile menu */

const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');

function toggleMenu(){
   if(menu.classList.contains('active')){  /* si el menu contiene una clase activada(osea algo activado) */
    closeNav() // ejecutar la funcion closeNav(),  mirar mas abajo
} else{
    menu.classList.add('active');/* no esta activado, pues activalo */
    toggle.querySelector('a').innerHTML = "<i class='fas fa-times'></i>"; /* cambia las 3 barras por X  */
    document.getElementById("navbar").style.backdropFilter = "blur(7px) ";
    document.getElementById("navbar").style.height = "100vh ";
    console.log('menu abierto')
    }
}

toggle.addEventListener('click', toggleMenu, false);


function closeNav(){
    menu.classList.remove('active'); /* entonces que quite este algo activado(lo cierra) */
      toggle.querySelector('a').innerHTML = "<i class='fas fa-bars'></i>"; /* y cambie el <a> por 3 barras */
      document.getElementById("navbar").style.height = "auto";
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
/* window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
     document.getElementById("navbar").style.backgroundColor = "rgba(80, 80, 80, 0.6) "; 
  } else {
    document.getElementById("navbar").style.backgroundColor = "rgba(80, 80, 80, 0.157) ";
  }
} */

/*--------- ABOUT US --------- */


function vermas() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      document.getElementById("mas").style.display="inline";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      document.getElementById("mas").style.display="none";
      document.getElementById("menos").style.display="inline";
      moreText.style.display = "inline";
    }
  }


  /* ====================================LIGHTBOX========================================== */

const images = document.querySelectorAll('.img'); /* todas la imagenes que tengan classe img */
const containerImage = document.querySelector('.container-img');
const imageContainer = document.querySelector('.img-show');
const closeContainer = document.querySelector('.x');

images.forEach(image =>{
    image.addEventListener('click',() => {
       addImage(image.getAttribute('src'),/*  image.getAttribute('alt') */);
      
      })
})

/* ------------abrir container------------- */
const addImage = (srcImage, altImage)=>{
  containerImage.classList.toggle('move');
  imageContainer.classList.toggle('show');   /* toggle agrega o quita la clase .move */
  imageContainer.src = srcImage;
}

/* ------------cerrar container-------- */
  closeContainer.addEventListener('click',() =>{ /* cuando cerramos el container */
  containerImage.classList.toggle('move'); 
  imageContainer.classList.toggle('show');
})
