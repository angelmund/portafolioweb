let menuVisible = false;
//funcion que oculta el menu
function mostrarOcultarMenu() {
  if (menuVisible) {
    document.getElementById("nav").classList = "";
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
}
function seleccionar() {
  //oculta una vez que se selecciona una opción
  document.getElementById("nav").classList = "";
  menuVisible = false;
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

document.addEventListener("DOMContentLoaded", function (event) {
  var dataText = [
    "Bienvenido a mi portafolio.",
    "Mi nombre es Miguel Ángel.",
    "Soy egresado de la Ingeniería en Sistemas.",
    "Me dedico al desarrollo de software y páginas web.",
    "Tengo experiencia en lenguajes como Java, Python, JavaScript, PHP y SQL.",
    "He trabajado con los frameworks de Laravel y Flask.", 
    "Me gusta aprender cosas nuevas y enfrentar nuevos retos."
  ];
  var cursor = "|";

  function typeWriter(text, i, fnCallback) {
    if (i < text.length) {
      document.querySelector(".text").innerHTML =
        text.substring(0, i + 1) + '<span class="cursor">' + cursor + "</span>";
      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback);
      }, 100); // velocidad de escritura aquí
    } else if (typeof fnCallback == "function") {
      document.querySelector(".text").innerHTML =
        text + '<span class="cursor">' + cursor + "</span>";
      setTimeout(fnCallback, 700); // tiempo de espera antes de llamar a la siguiente animación
    }
  }

  function StartTextAnimation(i) {
    if (typeof dataText[i] == "undefined") {
      return; // Termina la animación cuando se han mostrado todos los textos
    }
    if (i < dataText.length) {
      typeWriter(dataText[i], 0, function () {
        StartTextAnimation(i + 1);
      });
    }
  }

  // Esperar a que la página se cargue completamente
  window.onload = function () {
    StartTextAnimation(0);
  };
});

//funcion para mandar mensaje de watsapp
function enviarMensaje() {
  let mensaje = "Hola, me gustaría cotizar un sistema o página web.";
  let telefono = "2281843180";
  let url = `https://api.whatsapp.com/send?phone=${telefono}&text=${encodeURIComponent(
    mensaje
  )}`;
  window.open(url, "_blank");
}

//para abrir el modal de las imagenes de los proyectos
const modalImage = document.getElementById("modalImage");
const openModalButtons = document.querySelectorAll(".open-modal");

//iterar sobre cada boton para abrir el modal
openModalButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const projectImg = this.closest(".proyecto").querySelector(".project-img");
    modalImage.src = projectImg.src;
    modalImage.alt = projectImg.alt;
  });
});

if (window.innerWidth <= 576) {
  window.addEventListener("scroll", () => {
    const elementos = document.querySelectorAll(
      ".portafolio .galeria .proyecto .overly"
    );

    elementos.forEach((elemento) => {
      const rect = elemento.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;

      if (rect.top >= 0 && rect.top <= windowHeight) {
        elemento.classList.add("scroll-active");
      } else {
        elemento.classList.remove("scroll-active");
      }
    });
  });
}


//ajax para el formulario de contacto
var form = document.getElementById("contactForm");

async function handleSubmit(event) {
event.preventDefault();
var status = document.getElementById("btn_send");
var data = new FormData(event.target);
fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
    Accept: "application/json",
    },
})
    .then((response) => {
    if (response.ok) {
        Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Gracias por tu mensaje me pondré en contacto contigo pronto.",
        showConfirmButton: false,
        timer: 4500
        });
        form.reset();
    } else {
        response.json().then((data) => {
        if (Object.hasOwn(data, "errors")) {
            status.innerHTML = data["errors"]
            .map((error) => error["message"])
            .join(", ");
        } else {
            status.innerHTML = "Oops! There was a problem submitting your form";
            Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Algo salió mal, por favor intenta de nuevo.",
            });
        }
        });
    }
    })
    .catch((error) => {
    status.innerHTML = "Oops! There was a problem submitting your form";
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Algo salió mal, por favor intenta de nuevo.",
    });
    });
}
form.addEventListener("submit", handleSubmit);