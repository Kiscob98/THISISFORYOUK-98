// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Simular una carga de contenido con un temporizador
    setTimeout(function() {
        document.getElementById("loader").style.display = "none"; // Ocultar el loader
        document.getElementById("content").style.display = "block"; // Mostrar el contenido principal
    }, 35000); // Tiempo en milisegundos (30 segundos)
});

// script.js
document.getElementById('passwordForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');

    if (password === 'friends') {
        // Redirigir a otra página si la contraseña es correcta
        window.location.href = 'Cassette.html';
    } else {
        // Mostrar mensaje de error si la contraseña es incorrecta
        errorMessage.textContent = 'Contraseña incorrecta. Inténtalo de nuevo.';
    }
});
