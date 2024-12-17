 document.addEventListener('DOMContentLoaded', function() {
            const urlParams = new URLSearchParams(window.location.search);
            const userName = urlParams.get('name');
            if (userName) {
                document.getElementById('userName').textContent = decodeURIComponent(userName); //.textContent = decodeURIComponent(userName): Asigna el nombre del usuario al contenido de texto del elemento, asegurando que cualquier carácter especial esté correctamente decodificado.
            }
        });