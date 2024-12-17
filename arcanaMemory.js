
let unCoverCards = 0;
let card1 = null;
let card2 = null;
let firstResult = null;
let secondResult = null;
let successes = 0;
let time = false;
let timer = 30;
let countdownTime = null


let showSuccesses = document.getElementById('successes')
let showTime = document.getElementById('timeLeft')


let numbers =  [1,1,2,2,3,3,4,4,5,5,6,6];
numbers = numbers.sort(()=>{return Math.random ()-0.5})
console.log(numbers)


//funciones

function countTime(){
    countdownTime = setInterval(()=> {
    timer--;
    showTime.innerHTML = ` 00:${timer}`;
    if(timer == 0){
    clearInterval(countdownTime);
    blockCards();
    }
    },1000)
}

function blockCards(){
    for (let i = 0; i<=11; i++){
        let blockCard = document.getElementById(i);
        blockCard.innerHTML = numbers [i]
        blockCard.disabled = true;
    }
}

//funcion principal
function unCover(id){

    if(time == false){

        countTime();
        time = true;
        
    }

    unCoverCards++;
    console.log(unCoverCards)

    if(unCoverCards == 1){
        //mostrar el primer numero
        card1 = document.getElementById(id);
        firstResult = numbers[id];
        card1.innerHTML = firstResult;
   
    card1.disabled = true
    }
    else if (unCoverCards==2) {
        card2 = document.getElementById (id);
        secondResult = numbers[id];
        card2.innerHTML = secondResult;

    card2.disabled = true
    

    if(firstResult == secondResult){
        unCoverCards = 0;
        card1.disabled = false
        successes++
        showSuccesses.innerHTML = `Successes: ${successes}`;
        
     if (successes == 8) {
        showSuccesses.innerHTML = `Successes: ${successes}, Ganaste!`;
        }
    }

    else{

        setTimeout(()=>{
            card1.innerHTML = "";
            card2.innerHTML = "";
            card1.disabled = false
            card2.disabled = false
            unCoverCards = 0;
        },800)
    }
    }
}
