import AniPropDb from "../aniPropDb/AniPropDb.js";
import Increment from "./filters/increment.js";
import Decrement from "./filters/decrement.js";
import Random from    "./filters/random.js";
import Oscillate from "./filters/oscillatets.js"; 

export default class AniNumberDb extends AniPropDb <number>{

private _isResp :boolean;
private theWhole :number | null;
     
constructor(initialValue :number){
super(initialValue)
this._isResp = false;
this.theWhole = null;
}
//////////////////////////////////////////////
private init(theWhole :number){
this.theWhole = theWhole;
}
private setResp(tf :boolean){
    this._isResp = tf;
}

isResponsive():boolean{
    return this._isResp;
}


public value():number{
        if (this._isResp == false){
            return super.value() ;
        }else {
            return this.responsiveValue(super.value());        
        }
}

public valueRaw():number{
    return super.value();
 
}

private responsiveValue(perc :number):number {
if (this.theWhole == null){throw new Error("init error");}
    return ((this.theWhole / 100) * perc);
}

//////////////////////////////////////////////
public animate( StartSec :number, endSec :number,startValue :number,endValue :number){
    if (startValue < endValue ){
        let inc = new Increment(StartSec * 1000,endSec * 1000,startValue,endValue,0);
        this.addFilter(inc);
    }else if (startValue > endValue){
        let dec = new Decrement(StartSec * 1000,endSec * 1000,startValue,endValue,0);
        this.addFilter(dec);
    }
    // else if (startValue == endValue){
    //     let c = new ConstantNo(from,to,startValue);
    //     this.filters.push(c);
    // }
}

public random(StartSec :number,endSec :number,min :number=0, max :number=100, delayInMs :number=10){
const v = new Random(StartSec * 1000, endSec * 1000, min,max,delayInMs);
this.addFilter(v);
}

public oscillate(StartSec :number,endSec :number,startValue :number, endValue :number,secPerIter :number= 1,stopAt=endValue){
///-Bug 002
if (startValue > endValue ){
throw new Error("for oscillate operation the startValue can not be bigger than endValue, however in future this restriction may be lifted.");   
}    
const v = new Oscillate(StartSec * 1000,endSec * 1000,startValue,endValue,secPerIter * 1000,stopAt);
this.addFilter(v);  
}//oscialte


}