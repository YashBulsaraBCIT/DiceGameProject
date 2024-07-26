
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

}

//built by Yash Bulsara
function rollDice(){
    
}
