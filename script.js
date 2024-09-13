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

document.addEventListener('DOMContentLoaded', function(event) {
  var dataText = ["Hola, soy Miguel Angel, Desarrollador Web, egresado de la Ingeniería en Sistemas"];

  function typeWriter(text, i, fnCallback) {
      if (i < text.length) {
          document.querySelector(".text").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
          setTimeout(function() {
              typeWriter(text, i + 1, fnCallback);
          }, 100); // velocidad de escritura aquí
      } else if (typeof fnCallback == 'function') {
          setTimeout(fnCallback, 700); //  tiempo de espera antes de llamar a la siguiente animación
      }
  }

  function StartTextAnimation(i) {
      if (typeof dataText[i] == 'undefined') {
          return; // Termina la animación cuando se han mostrado todos los textos
      }
      if (i < dataText.length) {
          typeWriter(dataText[i], 0, function() {
              StartTextAnimation(i + 1);
          });
      }
  }

  // Esperar a que la página se cargue completamente
  window.onload = function() {
      StartTextAnimation(0);
  };
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


//para abrir el modal de las imagenes de los proyectos
const modalImage = document.getElementById('modalImage');
const openModalButtons = document.querySelectorAll('.open-modal');

//iterar sobre cada boton para abrir el modal
openModalButtons.forEach(button => {
    button.addEventListener('click', function() {
        const projectImg = this.closest('.proyecto').querySelector('.project-img');
        modalImage.src = projectImg.src;
        modalImage.alt = projectImg.alt;
    });
});



//boton de enviar correo
btn_Enviar = document.querySelector(".btn_send");
btn_Enviar.addEventListener('click', enviarCorreo);

async function enviarCorreo() {
    const url = 'php/';
    try {
        const formData = new FormData($('#contactForm')[0]);

        const response = await fetch(url + 'contacto.php', {
            method: 'POST',
            mode: 'cors',
            redirect: 'manual',
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            body: formData
        });

        const data = await response.json();
        switch (data.idnotificacion) {
            case 1:
                
                Swal.fire({
                    title: data.mensaje,
                    icon: "success",
                    showConfirmButton: false,  // No mostrar el botón "Ok"
                    timer: 1000,  // Cerrar automáticamente después de 1500 milisegundos (1.5 segundos)
                    timerProgressBar: true  // Mostrar una barra de progreso durante el temporizador
                });
                // Esperar un breve período de tiempo antes de recargar la página
                setTimeout(function () {
                    document.getElementById('contactForm').reset();
                    window.location.reload();
                }, 1000); // Espera 1 segundo

                break;

            case 2:
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: data.mensaje
                });
                break;

            case 3:
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: data.mensaje
                });
                break;

            default:
                Swal.fire({
                    icon: "info",
                    title: "Info...",
                    text: "Error desconocido"
                });
        }

    } catch (error) {
        console.error("Error al procesar la solicitud:", error);
    }
}

document.getElementById('festMusic').addEventListener('shown.bs.modal', function () {
    var myCarousel = document.querySelector('#carouselExampleIndicators');
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 2000,
        ride: 'carousel'
    });
});