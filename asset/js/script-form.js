document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registroForm');
    const passwordInput = document.getElementById('password');
    const confirmarPasswordInput = document.getElementById('confirmarPassword');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        if (validarFormulario()) {
            alert('Formulario enviado con éxito.');
        }
    });

    function validarFormulario() {
        const nombre = form.nombre.value.trim();
        const apellido = form.apellido.value.trim();
        const email = form.email.value.trim();
        const password = passwordInput.value.trim();
        const confirmarPassword = confirmarPasswordInput.value.trim();

        if (!nombre || !apellido || !email || !password || !confirmarPassword) {
            alert('Por favor, completa todos los campos.');
            return false;
        }

        if (password !== confirmarPassword) {
            alert('Las contraseñas no coinciden.');
            return false;
        }

        return true;
    }
});