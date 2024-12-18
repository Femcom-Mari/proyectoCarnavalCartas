const winnerAudio = new Audio('./sounds/Win.mp3');
const loseAudio = new Audio('./sounds/lose.mp3');
const clickAudio = new Audio('./sounds/click.mp3');
const rightAudio = new Audio('./sounds/good.mp3');
const wrongAudio = new Audio('./sounds/bad.mp3');

let soundEnabled = true;

function toggleSound() {
    soundEnabled = !soundEnabled;
    const soundIcon = document.getElementById('sound-icon');
    soundIcon.src = soundEnabled ? 'img01/soundOn.png' : 'img01/soundOff.png';
    
    // Guardar preferencia en localStorage
    localStorage.setItem('soundEnabled', soundEnabled);
}

function playSound(audio) {
    if (soundEnabled) {
        audio.play();
    }
}

// Inicializar el estado del sonido desde localStorage
document.addEventListener('DOMContentLoaded', () => {
    const savedSound = localStorage.getItem('soundEnabled');
    if (savedSound !== null) {
        soundEnabled = savedSound === 'true';
        const soundIcon = document.getElementById('sound-icon');
        if (soundIcon) {
            soundIcon.src = soundEnabled ? 'img01/soundOn.png' : 'img01/soundOff.png';
        }
    }
});

// Hacer las funciones y variables disponibles globalmente
window.toggleSound = toggleSound;
window.playSound = playSound;
window.soundEnabled = soundEnabled;
