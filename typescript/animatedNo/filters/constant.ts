
export default class Constant{
private readonly _constant :number;

constructor(constant :number=0){
this._constant = constant;
}

update(msDelta :number):boolean{
  return true;
}

value():number | null{
    return this._constant;
}

//////////////////////////////

} 