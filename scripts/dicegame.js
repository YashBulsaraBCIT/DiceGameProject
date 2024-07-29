const diceContainer1 = document.getElementById("dice-container1");
const diceContainer2 = document.getElementById("dice-container2");
const rollButton = document.getElementById("roll")
const restButton = document.getElementById("reset")

let currentScore = 0;
let totalScoreP1 = 0;
let totalScoreP2 = 0;
let turns = 0;

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
    diceContainer2.innerHTML += `<p>Score: ${scoreChecker(rolledDice3.getValue(), rolledDice3.getValue())}</p>`
    totalScoreP2 += currentScore
    diceContainer2.innerHTML += `<p>Total Score: ${totalScoreP2}</p>`

    turns++
}

// Empties the container.
function resetDiceContainer()
{

    diceContainer1.innerHTML = "";
    diceContainer2.innerHTML = "";

}


rollButton.addEventListener("click", rollDiceAndDisplay);
restButton.addEventListener("click", resetDiceContainer);
