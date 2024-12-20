let unCoverCards = 0;
let card1 = null;
let card2 = null;
let firstResult = null;
let secondResult = null;
let successes = 0;
let time = false;
let timer = 60;
let countdownTime = null;

let showSuccesses = document.getElementById('successes')
let showTime = document.getElementById('timeLeft')

let numbers =  [1,1,2,2,3,3,4,4,5,5,6,6];
numbers = numbers.sort(()=>{return Math.random ()-0.5});
console.log(numbers)


function countTime(){
    countdownTime = setInterval(()=> {
    showTime.innerHTML = `00:${timer}`;
    timer--;
    if(timer == 0){
    clearInterval(countdownTime);
    blockCards(numbers);
    playSound(loseAudio);
    showTime.innerHTML = `Game Over!`;
    }
  },1000,timer);
}

function blockCards(numbers){
    for (let i = 0; i <= 11; i++){
        let blockCard = document.getElementById(i);
        blockCard.innerHTML = `<img src="./images/${numbers[i]}.png" alt="Card image">`;
        blockCard.disabled = true;
    }
}


function unCover(id){
    if(time == false){
        countTime();
        time = true;  
    }
    unCoverCards++;
    console.log(unCoverCards)

    if(unCoverCards == 1){
        //mostrar el primer numero
        playSound(clickAudio);
        card1 = document.getElementById(id);
        firstResult = numbers[id];
        card1.innerHTML = `<img src="./images/${firstResult}.png"  alt="Card image">`;
        card1.disabled = true;
        
    } else if (unCoverCards == 2) {
        playSound(clickAudio);
        card2 = document.getElementById(id);
        secondResult = numbers[id];
        card2.innerHTML = `<img src="./images/${secondResult}.png"  alt="card image">`;
        card2.disabled = true;
    
    if(firstResult == secondResult){
        unCoverCards = 0; 
        card1.disabled = true; 
        card2.disabled = true;
        successes++;
        playSound(rightAudio);
            
    if(successes == 6){
        showTime.innerHTML = `Fantastic!`;
        winnerAudio.play();
        clearInterval(countdownTime);
        blockCards(numbers);
        }
            
    } else {
        playSound(wrongAudio);
        setTimeout(()=>{
        card1.innerHTML = '<img class="button-image" src="/img01/11.webp" alt="Cover">';
        card2.innerHTML = '<img class="button-image" src="/img01/11.webp" alt="Cover">';
        card1.disabled = false;
        card2.disabled = false;
        unCoverCards = 0;
        }, 800);
        }
    }
}