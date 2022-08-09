import BaseFilter from "../baseFilter.js";

export default class Vibrate extends BaseFilter{

private    offset:number;

constructor(msDeltaStart :number,msDeltaEnd :number, offset :number=10,delayInMS :number=0){
super(msDeltaStart,msDeltaEnd,delayInMS);    

this.offset = offset;
}

public value(msDelta: number, baseGotoValue: number): number | null {
    if (Math.random() > 0.5){
        this._ret_val =    baseGotoValue + this.offset; 
    }else {
        this._ret_val =    baseGotoValue - this.offset;        
    }    
    return this._ret_val;    
}

}
