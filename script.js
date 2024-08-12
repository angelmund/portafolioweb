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