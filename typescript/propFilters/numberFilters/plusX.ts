

export default class PlusX{
increment:number;
counter :number;
constructor(increment :number){
this.increment = increment; 
this.counter = 0; 
}

value(){
    this.counter = this.counter + this.increment; 
    return this.counter;
}


} 