
//built by Yash Bulsara
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
    const rolledDice2 = player1.rollDice()

    //computer dice pair
    const rolledDice3 = player2.rollDice()
    const rolledDice4 = player2.rollDice()


    const diceContainer1 = document.getElementById("dice-container1");
    const diceContainer2 = document.getElementById("dice-container2");

    diceContainer1.innerHTML = "";
    diceContainer1.innerHTML = rolledDice1.describeSelf();
    diceContainer1.innerHTML += rolledDice2.describeSelf();


    diceContainer2.innerHTML = "";
    diceContainer2.innerHTML = rolledDice3.describeSelf();
    diceContainer2.innerHTML += rolledDice4.describeSelf();
}

// Empties the container.
function resetDiceContainer()
{
    const diceContainer1 = document.getElementById("dice-container1");
    const diceContainer2 = document.getElementById("dice-container2");

    diceContainer1.innerHTML = "";
    diceContainer2.innerHTML = "";

}

document.getElementById("roll").addEventListener("click", rollDiceAndDisplay);
document.getElementById("reset").addEventListener("click", resetDiceContainer);
