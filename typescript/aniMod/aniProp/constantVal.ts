import BaseFilter from "./baseFilter.js";
  
export default class ConstantNo {
    constantValue:number;
constructor(msDeltaStart :number,msDeltaEnd :number, constantValue :number){
super(msDeltaStart,msDeltaEnd);  
this.constantValue = constantValue;
}

//also
// public update(msDelta :number,baseGotoValue :number=0):boolean{
// this._ret_val = this.constantValue;
// return  true;
// }

public value(): number | null {
    return this.constantValue;
}

}
