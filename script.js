let menuVisible =false;
//funcion que oculta el menu 
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible =false;

    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible =true;
    }
}
function seleccionar(){
    //oculta una vez que se selecciona una opción
    document.getElementById("nav").classList ="";
    menuVisible =false;
}
// //funci[on] para animaciones de las habilidades 
// function efectoHabilidades(){
//     var skills =document.getElementById("skills");
//     var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
//     if(distancia_skills >= 300){
//         let habilidades = document.getElementsByClassName("progreso");
//         habilidades[0].classList.add("javascript");
//         habilidades[1].classList.add("htmlcss");
//         habilidades[2].classList.add("java");
//         habilidades[3].classList.add("spring");
//         habilidades[4].classList.add("python");
//         habilidades[5].classList.add("sql");
//         habilidades[6].classList.add("laravel");
//         habilidades[7].classList.add("htmlcss");
//         habilidades[8].classList.add("php");
//         habilidades[9].classList.add("comunicacion");
//         habilidades[10].classList.add("trabajoEquipo");
//         habilidades[11].classList.add("dedicacion");
//         habilidades[12].classList.add("progermanager");
//         habilidades[13].classList.add("progermanager");
//     }
// }

// //detecto el scrolling para aplicar las animaciones de la barra de habilidades
// window.onscroll = function(){
//     efectoHabilidades();
// }

document.addEventListener('DOMContentLoaded',function(event){
    var dataText = [ "Hola, soy Miguel Angel, Desarrollador Web, egresado de la Ingeniería en Sistemas"];
          function typeWriter(text, i, fnCallback) {
      if (i < (text.length)) {
       document.querySelector(".text").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
            setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
        }, 500);
      }
      else if (typeof fnCallback == 'function') {
        setTimeout(fnCallback, 10);
      }
    }
     function StartTextAnimation(i) {
       if (typeof dataText[i] == 'undefined'){
          setTimeout(function() {
            StartTextAnimation(0);
          }, 500);
       }
      if (i < dataText[i].length) {
       typeWriter(dataText[i], 0, function(){
         StartTextAnimation(i + 1);
       });
      }
    }
    StartTextAnimation(0);
  });

//funcion para mandar mensaje de watsapp
function enviarMensaje(){

    let mensaje = "Hola, me gustaría cotizar un sistema o página web.";
    let telefono = "2281843180";
    let url = `https://api.whatsapp.com/send?phone=${telefono}&text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
}
 btn_Enviar = document.querySelector(".contactarme");
btn_Enviar.addEventListener('click', enviarMensaje);
