function changeStyle() {
  
    document.body.classList.remove("cuerpo2");
    document.getElementsByTagName("button")[1].classList.remove("boton2");

    document.body.classList.add("cuerpo");
    document.getElementsByTagName("button")[0].classList.add("boton");

}

function changeStyle2() {

    document.body.classList.remove("cuerpo");
    document.getElementsByTagName("button")[0].classList.remove("boton");

    document.body.classList.add("cuerpo2");
    document.getElementsByTagName("button")[1].classList.add("boton2");

}