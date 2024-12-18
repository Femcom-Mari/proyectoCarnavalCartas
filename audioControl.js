const winnerAudio = new Audio('.sounds/Win.mp3');
const loseAudio = new Audio('./sounds/lose.mp3');
const clickAudio = new Audio('./sounds/click.mp3');
const rightAudio = new Audio('./sounds/good.mp3');
const wrongAudio = new Audio('./sounds/bad.mp3');
let isSoundOn = true; // Variable para controlar el estado del sonido

let soundEnabled = true; // Control del sonido

// Función para alternar el sonido
function toggleSound(soundIcon) {
    soundEnabled = !soundEnabled;
    soundIcon.src = soundEnabled ? 'img01/soundOn.png' : 'img01/soundOff.png';
}

// Función para reproducir sonidos con control
function playSound(audio) {
    if (soundEnabled) {
        audio.play();
    }
}

// Exportar funciones y audios
export {
    winnerAudio,
    loseAudio,
    clickAudio,
    rightAudio,
    wrongAudio,
    toggleSound,
    playSound
};
