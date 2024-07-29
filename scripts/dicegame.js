const diceContainer1 = document.getElementById("dice-container1");
const diceContainer2 = document.getElementById("dice-container2");
const rollButton = document.getElementById("roll");
const restButton = document.getElementById("reset");
const resultPopupContent = document.getElementById("content");

const $popup = $('#popupId');
const $rollButton = $('#roll');

let currentScore = 0;
let totalScoreP1 = 0;
let totalScoreP2 = 0;
let turns = 0;
let html = "";

//@author Yash Bulsara
class dice{
    #face;
    #value;

    constructor(face, value){
        this.setFace(face);
        this.setValue(value);
    }

    getFace(){
        return this.#face;
    }

    getValue(){
        return this.#value;
    }
    
    setFace(newFace){
        this.#face = newFace;
    }

    setValue(newValue){
        this.#value = newValue;
    }

    describeSelf(){
        let returnImage = `<img class="dice-img" src="images/dice-${this.#face}.jpg" alt="dice-${this.#face}">`
        return returnImage
    }

}

function scoreChecker(firstNumber, secondNumber){
    currentScore = 0;
    if(firstNumber == 1 || secondNumber == 1){
        currentScore = 0;
    }else if(firstNumber == secondNumber){
        currentScore = (firstNumber + secondNumber)*2
    }else{
        currentScore = firstNumber + secondNumber
    }

    return currentScore
}

function winChecker(totalScore1, totalScore2){
    if(totalScore1 == totalScore2){
        resultPopup("tie");
    }else if(totalScore1 > totalScore2){
        resultPopup("p1Winner");
    }else{
        resultPopup("p2Winner");
    }
}

function resultPopup(result){
    if(result == "tie"){
        resultPopupContent.innerHTML = `<h2>It's a tie!</h2>`;

    }else if(result == "p1Winner"){
        resultPopupContent.innerHTML = `<h2>Player 1 Wins!</h2>`;

    }else if(result == "p2Winner"){
        resultPopupContent.innerHTML = `<h2>Player 2 Wins!</h2>`;
    }

    $popup.css("transition", "1s ease-in");
    $popup.css("visibility", "visible"); 
    $popup.css("opacity", 1);

    $( ".close" ).click(function() {

        $popup.css("transition", "1s ease-out");
        $popup.css("visibility", "hidden"); 
        $popup.css("opacity", 0);

    });

}

//@author Marius Ruzzel Guerra
class Player
{   #playerName;
    #dice;
    constructor(playerName)
    {
        this.#playerName = playerName;
        this.#dice = new dice(1,1);
    }

    rollDice()
    {
        const face = Math.floor(Math.random()*6) +1;
        this.#dice.setFace(face);
        this.#dice.setValue(face);
        return new dice(face, face);
    }
}

function rollDiceAndDisplay()
{
    const player1 = new Player("Player1");
    const player2 = new Player("Player2");

    //player dice pair
    const rolledDice1 = player1.rollDice();
    const rolledDice2 = player1.rollDice();

    //computer dice pair
    const rolledDice3 = player2.rollDice();
    const rolledDice4 = player2.rollDice();

    console.log(rolledDice1);
    console.log(rolledDice2);
    console.log(rolledDice3);
    console.log(rolledDice4);

    diceContainer1.innerHTML = "";
    diceContainer1.innerHTML = rolledDice1.describeSelf();
    diceContainer1.innerHTML += rolledDice2.describeSelf();
    diceContainer1.innerHTML += `<p>Score: ${scoreChecker(rolledDice1.getValue(), rolledDice2.getValue())}</p>`
    totalScoreP1 += currentScore
    diceContainer1.innerHTML += `<p>Total Score: ${totalScoreP1}</p>`

    diceContainer2.innerHTML = "";
    diceContainer2.innerHTML = rolledDice3.describeSelf();
    diceContainer2.innerHTML += rolledDice4.describeSelf();
    diceContainer2.innerHTML += `<p>Score: ${scoreChecker(rolledDice3.getValue(), rolledDice4.getValue())}</p>`
    totalScoreP2 += currentScore
    diceContainer2.innerHTML += `<p>Total Score: ${totalScoreP2}</p>`

    turns++

    console.log(turns);
    if(turns == 3){
        $rollButton.attr("disabled", true);
        winChecker(totalScoreP1, totalScoreP2);
    }
}

// Empties the container.
function resetDiceContainer()
{

    diceContainer1.innerHTML = "";
    diceContainer2.innerHTML = "";
    turns = 0;
    totalScoreP1 = 0;
    totalScoreP2 = 0;
    $rollButton.removeAttr("disabled");
}

rollButton.addEventListener("click", rollDiceAndDisplay);
restButton.addEventListener("click", resetDiceContainer);
