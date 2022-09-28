import AniProp from "../aniProp/aniProp.js";
import IdentityFil from "../filters/identityFil.js";
import Increment from "./filters/increment.js";
import Decrement from "./filters/decrement.js";
import Random from "./filters/random.js";
import Oscillate from "./filters/oscillatets.js";

// import Vibrate from "./effFilters/vibrate.js";

export default class AniNumber extends AniProp<number>  {
    
public readonly minValue :number;
public readonly maxValue :number;
private isResponsive :boolean;
private theWhole :number | null;

constructor(initialValue :number=0, minValue :number=-3000,maxValue :number=3000){
 
super(initialValue);
this.isResponsive = false;
this.theWhole = null;
this.minValue  = minValue; 
this.maxValue  = maxValue; 

}
setResponsive(theWhole :number){
    this.isResponsive = true;
    this.theWhole = theWhole;     
}
setNonResponsive(){
    this.isResponsive = false;    
this.theWhole = null;
}
public value():number{
//--do not return this._value that is null in start-- this will give a correct result even without an update  
if (this._value == null){
        if (this.isResponsive == false){
            return this.defaultFilter.animatedValue();
        }else {
            return this.responsiveValue(this.defaultFilter.animatedValue());        
        }
} else {
    if (this.isResponsive == false){
        return this._value;
    }else {
        return this.responsiveValue(this._value);        
    }
} 
}
responsiveValue(perc :number):number {
if (this.theWhole == null){throw new Error("theWhole is null");}
    return ((this.theWhole / 100) * perc);
}

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
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

//---effects
public vibrate(rTimeMsStart :number,rTimeMsEnd :number,offset :number=10,delaySec :number= 100){
    // const v = new Vibrate(rTimeMsStart,rTimeMsEnd,offset,delayInMilliSec);
    // this.filters.push(v);
}
} 