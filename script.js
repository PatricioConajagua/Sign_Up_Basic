document.addEventListener('DOMContentLoaded', function () {
    console.log('Script cargado');

    var registroForm = document.querySelector('form');

    if (registroForm) {
        registroForm.addEventListener('submit', function (event) {
            event.preventDefault();
            console.log('Formulario enviado');

            // Obtener los valores de los campos
            var nombre = document.getElementById('nombre').value;
            var email = document.getElementById('email').value;
            var password = document.getElementById('password').value;
            var confirmarPassword = document.getElementById('confirmarPassword').value;

            // Verificar que los campos no estén vacíos
            if (nombre.trim() === '' || email.trim() === '' || password.trim() === '' || confirmarPassword.trim() === '') {
                mostrarMensajeError('Completa todos los campos');
                return;
            }

            // Verificar que la confirmación de contraseña sea igual a la contraseña
            if (password !== confirmarPassword) {
                mostrarMensajeError('Las contraseñas no coinciden');
                return;
            }

            // Si las contraseñas coinciden, ocultar el mensaje de error
            ocultarMensajeError();

            // Mostrar mensaje de registro exitoso
            var registroExitoso = document.getElementById('registroExitoso');
            if (registroExitoso) {
                registroExitoso.classList.remove('d-none');
            }
        });
    } else {
        console.log('Elemento "form" no encontrado');
    }

    // Función para mostrar mensajes de error
    function mostrarMensajeError(mensaje) {
        var mensajeError = document.getElementById('mensajeError');
        if (mensajeError) {
            mensajeError.textContent = mensaje;
            mensajeError.classList.remove('d-none');
        }
    }

    // Función para ocultar el mensaje de error
    function ocultarMensajeError() {
        var mensajeError = document.getElementById('mensajeError');
        if (mensajeError) {
            mensajeError.classList.add('d-none');
        }
    }

    // Agregar funcionalidad para mostrar/ocultar contraseña
    var togglePasswordButton = document.getElementById('togglePassword');
    var passwordInput = document.getElementById('password');
    var confirmarPasswordInput = document.getElementById('confirmarPassword');

    if (togglePasswordButton && passwordInput && confirmarPasswordInput) {
        togglePasswordButton.addEventListener('click', function () {
            // Cambia el tipo de entrada del campo de contraseña
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                confirmarPasswordInput.type = 'text';
                togglePasswordButton.textContent = 'Ocultar';
            } else {
                passwordInput.type = 'password';
                confirmarPasswordInput.type = 'password';
                togglePasswordButton.textContent = 'Mostrar';
            }
        });
    } else {
        console.log('Elemento "togglePassword", "password" o "confirmarPassword" no encontrado');
    }
});
