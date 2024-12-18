document.addEventListener('DOMContentLoaded', function() {
    const restartIcon = document.getElementById('restart-icon');
    const popup = document.getElementById('restart-popup');
    const confirmButton = document.getElementById('confirm-restart');
    const cancelButton = document.getElementById('cancel-restart');

    restartIcon.addEventListener('click', function() {
        popup.style.display = 'flex';
    });

    confirmButton.addEventListener('click', function() {
        // Reiniciar el juego
        location.reload();
    });

    cancelButton.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    // Cerrar el popup si se hace clic fuera de él
    popup.addEventListener('click', function(e) {
        if (e.target === popup) {
            popup.style.display = 'none';
        }
    });
});
