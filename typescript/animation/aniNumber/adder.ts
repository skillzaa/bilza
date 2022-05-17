

export default class Adder{
increment:number;
val:number;
constructor(increment :number){
this.increment = increment; 
this.val = 0; 
}

update(msDelta :number):boolean{
    this.val = this.val  + this.increment; 
    return true;
}
value():number{
    return this.val;
}


} 