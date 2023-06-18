class Hero{
    constructor(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
    setName(name){
        this.name = name;
    }
}
//Exporting Suraj as Object first
module.exports= Hero;