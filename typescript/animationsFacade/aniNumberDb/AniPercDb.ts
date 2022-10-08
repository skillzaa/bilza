import AniPropDb from "../aniPropDb/AniPropDb.js";
import Increment from "./filters/increment.js";
import Decrement from "./filters/decrement.js";
import Random from    "./filters/random.js";
import Oscillate from "./filters/oscillatets.js"; 
import IdentityFil from "../filters/identityFil.js";
// import JumpBetween from "../filters/jumpBetween.js";


export default class AniPercDb extends AniPropDb <number>{

private theWhole : number;
// ---------------------------------     
constructor(value :number,theWhole :number){
super(value)
this.theWhole = theWhole;
}
//////////////////////////////////////////////
public value():number{
    return this.responsiveValue(super.value());        
}

public valuePerc():number{
    return super.value();
 
}
private responsiveValue(perc :number):number {
    if (this.theWhole == null){throw new Error("init error");}
        return ((this.theWhole / 100) * perc);
}
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
public animate( StartSec :number, endSec :number,startValue :number,endValue :number){
    // startValue = this.responsiveValue(startValue);
    // endValue = this.responsiveValue(endValue);

    if (startValue < endValue ){
        let inc = new Increment(StartSec * 1000,endSec * 1000,startValue,endValue,0);
        this.addFilter(inc);
    }else if (startValue > endValue){
        let dec = new Decrement(StartSec * 1000,endSec * 1000,startValue,endValue,0);
        this.addFilter(dec);
    }
}

public random(StartSec :number,endSec :number,min :number=0, max :number=100, delayInMs :number=10){    
    // min = this.responsiveValue(min);
    // max = this.responsiveValue(max);

const v = new Random(StartSec * 1000, endSec * 1000, min,max,delayInMs);
this.addFilter(v);
}

public oscillate(StartSec :number,endSec :number,startValue :number, endValue :number,secPerIter :number= 1,stopAt=endValue){

    // startValue = this.responsiveValue(startValue);
    // endValue = this.responsiveValue(endValue);
    // stopAt = this.responsiveValue(stopAt);

    if (startValue > endValue ){
throw new Error("for oscillate operation the startValue can not be bigger than endValue, however in future this restriction may be lifted.");   
}    
const v = new Oscillate(StartSec * 1000,endSec * 1000,startValue,endValue,secPerIter * 1000,stopAt);
this.addFilter(v);  
}//oscialte

///--goto overridden from AniPropDb since it takes percentages
public goto(atSec :number,value :number):boolean{
        // value = this.responsiveValue(value);
    const v = new IdentityFil(atSec * 1000,(atSec * 1000) + 1000,value);
    this.addFilter(v);
    return false;//// new goto frame ADDED 
}
getTheWhole():number{
return this.theWhole;
}
///////////////////////////////////////////
///////////////////////////////////////////
///////////////////////////////////////////
}