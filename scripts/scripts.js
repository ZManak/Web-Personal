//VALIDACIÓN DE FORMULARIO

document.querySelector("form.formulario").addEventListener("submit", function (event) {

    event.preventDefault(); //parar envío
    
    const alias = event.target.alias.value
    const email = event.target.email.value
    const message = event.target.message.value
    const plataforma = event.target.platform.value
    const peliculas = event.target.pelis.value
    
    let validated = true;

    if (alias.length < 3) {
        alert("Alias muy corto");
        validated = false;
    } 

    if (!email.includes(".com" || ".es" || ".org")) {
        alert("Falta dominio correcto")
        validated = false;
    }

    if (message.length < 5) {
        alert("Mensaje muy corto...")
        validated = false
    }
    
    if (plataforma == "") {
        alert("Selecciona alguna!")
        validated = false;
    }

    if (peliculas == "") {
        alert("Selecciona alguna!")
        validated = false;
    }

    if (validated){
        alert("Envío correcto")
        event.target.submit;
    }

})