import BaseFilter from "../baseFilter.js";

export default class Oscillate extends BaseFilter  {
private    startValue: number;
private    endValue: number;
private    speed: number;
private    addSub: boolean;

constructor(msDeltaStart :number,msDeltaEnd :number,startValue :number=1, endValue :number=10,speed :number= 1,delayInMS :number=0){

super(msDeltaStart,msDeltaEnd,delayInMS);    
    
this.startValue = startValue ;
this.endValue = endValue;
this.addSub = true;
this.speed = speed;
}

public value(msDelta: number, baseGotoValue?: number): number | null {
     //--should happen just once
     if (this._ret_val == null){
        this._ret_val = this.startValue;

    }
    //----Decide to add or subtract 
    if (this._ret_val < this.startValue ){
        this.addSub = true;
    }else if (this._ret_val > this.endValue){
        this.addSub = false;
    }
    //----Now add or subtract
    if (this.addSub == true){
        this._ret_val += this.speed; 
    }else {
        this._ret_val -= this.speed; 
    }
return this._ret_val;    
}

}
