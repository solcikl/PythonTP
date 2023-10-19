document.getElementById("formulario-contacto").addEventListener("submit", function(event) {
    event.preventDefault();

    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;
    var mensajeValidacion = document.getElementById("mensaje-validacion");

    if (nombre.trim() === "" || email.trim() === "" || mensaje.trim() === "") {
        mensajeValidacion.textContent = "Todos los campos son obligatorios.";
        mensajeValidacion.style.color = "red";
    } else {
        // Aquí puedes enviar el formulario o realizar otras acciones con los datos
        mensajeValidacion.textContent = "Formulario enviado correctamente.";
        mensajeValidacion.style.color = "green";

        // Por ejemplo, puedes enviar el formulario usando AJAX aquí
    }
});


/* MENU Transformacion */
document.addEventListener("DOMContentLoaded", function() {
    const botonToggle = document.getElementById('boton-toggle');
    const menu = document.getElementById('menu');

    botonToggle.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
    
    // Resto de tu código...
});