// import AniNumber from "../aniNumber/aniNumber.js";
import AniProp from "../aniProp/aniProp.js";
import Increment from "./filters/increment.js";
import Decrement from "./filters/decrement.js";
import ConstantPercVal from "./filters/constantPercVal.js";
import IFilter from "../filters/IFilter.js";
import IPercFilter from "./filters/IPercFilter.js";



export default class AniPerc extends AniProp<number>  {
   
    public readonly minValue :number;
    public readonly maxValue :number;
    
public defaultFilter :IFilter<number>;    
private canvasWidthHeight :number | null;
protected filtersArr :IPercFilter<number>[];   
/**
 * Finally the solution to an age old problem :How to change the Interface of an item from that what it has been assigned in a base class: answer re-declare that item with a new interface in a new class and the  use it internally.
 */
constructor(initialValue :number=0,responsive:boolean=true, minValue :number=-3000,maxValue :number=3000){

super(initialValue);
this.defaultFilter = new ConstantPercVal(0,100,initialValue);
// this.responsive = responsive;
this.canvasWidthHeight = null;
this.filtersArr  = [];


this.minValue  = minValue; 
this.maxValue  = maxValue; 

}
//..
public setResponsive(tf :boolean){
    for (let i = 0; i < this.filtersArr.length; i++) {
        const fil = this.filtersArr[i];
        fil.responsive = tf;
    }    
}

//-init has to do nothing with responsive this is just to get canvas width and height
init(canvasWidthHeight :number){
this.canvasWidthHeight = canvasWidthHeight;    

//----------------init defaullt value 
// this.defaultValue = this.percToPix(this.defaultValue,canvasWidthHeight);
//----------------init all
    for (let i = 0; i < this.filtersArr.length; i++) {
        const fil = this.filtersArr[i];
        fil.init(canvasWidthHeight);
    }     
//---Every time the init is run we multiply some values but during running of the programme we shd init it once and then stop it.    
    // this.responsive = false;    
}

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
public goto(rTimeMs :number,value :number):boolean{
//--NO DUBLICATE FRAME NUMBERS ALLOWED IN GOTOARRAY 
    for (let i = 0; i < this.filtersArr.length; i++) {
        const fil = this.filtersArr[i];
        if (fil.rTimeMsStart == rTimeMs){
            fil.setBaseValue(value);
            return true; // goto frame edited and not added
        }
    }
    //---The value is base value for filter
    const v = new ConstantPercVal(rTimeMs,rTimeMs + 1000,value,0);
    this.addFilter(v);
    return false;//// new goto frame ADDED 
}

public animate(rTimeMsStart :number,rTimeMsEnd :number,startValue :number,endValue :number){
    if (startValue < endValue ){
        let inc = new Increment(rTimeMsStart,rTimeMsEnd,startValue,0,endValue);
        this.addFilter(inc);
        //--- The stop filter
        const stop = new ConstantPercVal(rTimeMsEnd,rTimeMsEnd + 100000,endValue,0);
            this.addFilter(stop);
    }else if (startValue > endValue){
        let dec = new Decrement(rTimeMsStart,rTimeMsEnd,startValue,0,endValue);
        this.addFilter(dec);
        //--- The stop filter
        const stop = new ConstantPercVal(rTimeMsEnd,rTimeMsEnd + 100000,endValue,0);
            this.addFilter(stop);
    }
    // else if (startValue == endValue){
    //     let c = new ConstantNo(from,to,startValue);
    //     this.filters.push(c);
    // }
//--- This goto is to ensure that the last frame is met
// this.goto(to , endValue );    
}

public random(rTimeMsStart :number,rTimeMsEnd :number,min :number=0, max :number=100,delayInMilliSec :number=0){
// const v = new RandomNo(rTimeMsStart,rTimeMsEnd,min,max,delayInMilliSec);
// this.filters.push(v);
}
public jumpBetween(rTimeMsStart :number,rTimeMsEnd :number,pointOne :number=1, pointTwo :number=10,delayInMilliSec :number=0){
    // const v = new JumpBetween(rTimeMsStart,rTimeMsEnd,pointOne, pointTwo,delayInMilliSec);
    // this.filters.push(v);
}

public oscillate(rTimeMsStart :number,rTimeMsEnd :number,startValue :number=1, endValue :number=10,speed :number= 1){
// const v = new Oscillate(rTimeMsStart,rTimeMsEnd,startValue, endValue,speed);
// this.filters.push(v);
}

//---effects
public vibrate(rTimeMsStart :number,rTimeMsEnd :number,offset :number=10,delayInMilliSec :number= 100){
    // const v = new Vibrate(rTimeMsStart,rTimeMsEnd,offset,delayInMilliSec);
    // this.filters.push(v);
}
}  