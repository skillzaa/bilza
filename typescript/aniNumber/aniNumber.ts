import Increment from "./filters/increment.js";
import Decrement from "./filters/decrement.js";
import Vibrate from "./filters/vibrate.js";
import JumpBetween from "./filters/jumpBetween.js";
import SetOnce from "./filters/setOnce_goto.js";
import RandomNo from "./filters/randomNo.js";
import IFilter from "./IFilter.js";
import ConstantNo from "./filters/constantNo.js";


export default class AniNumber {
    //--this is the only output from this obj and we do NOT want to send out null BUT filters can be null and we dont consider that
    private _value :number;                 
    
    //------------------
    private filters :IFilter[];
    
constructor(defaultValue :number=0){
// place 1/2 to set this._ret_value
    this._value  = defaultValue; 
    
    this.filters = [];
}


update(msDelta :number):boolean{
// this.runGoto(msDelta);
this.runFilters(msDelta);
return true;    
}
public value():number{
return this._value;
}

//--this has effect only before init
public set(n :number){
 this._value = n;
 return this._value;
} 

public animate(from :number,to :number,startValue :number,endValue :number){
    if (startValue < endValue ){
        let c = new Increment(from,to,startValue,endValue);
        this.filters.push(c);
    }else if (startValue > endValue){
        let c = new Decrement(from,to,startValue,endValue);
        this.filters.push(c);
    }else if (startValue == endValue){
        let c = new ConstantNo(from,to,startValue);
        this.filters.push(c);
    }
}
public vibrate(from :number,to :number,seed :number=10,offset :number=10,delay :number=0){
    const v = new Vibrate(from,to,seed,offset,delay);
    this.filters.push(v);
}
public jumpBetween(startTimeSec :number,endTimeSec :number,pointOne :number=1, pointTwo :number=10,everyXFrame :number=0){
    const v = new JumpBetween(startTimeSec,endTimeSec,pointOne, pointTwo,everyXFrame);
    this.filters.push(v);
}
public random(startTimeSec :number,endTimeSec :number,min :number=0, max :number=100,everyXFrame :number=0){
const v = new RandomNo(startTimeSec,endTimeSec,min, max,everyXFrame);
this.filters.push(v);
}
public goto(startTimeSec :number,theValue :number=0){
const v = new SetOnce(startTimeSec,theValue);
this.filters.push(v);
}

private runFilters(msDelta :number){
    for (let i = 0; i < this.filters.length; i++) {
        const ani = this.filters[i];
        //---keep this._value and {} for later use
        ani.update(msDelta);
        let v  = ani.value(); 
            if ( v != null){
                //--place 2 of 2 where _ret_value is changed
                this._value = v;
            }
} 
}

} 