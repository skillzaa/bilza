import IFilter from "../filters/IFilter";
import IdentityFil from "../filters/identityFil.js";
import JumpBetween from "../filters/jumpBetween.js";
 

//-------------------------------------------

export default class AniProp <T>  {
//--this cant be null its not _ret_val of filter ITS aniProp    
protected _value :T | null;                 
// protected defaultValue :T;                 
protected filtersArr :IFilter<T>[];       
protected defaultFilter :IFilter<T>;       
//--now that we have default Filter there is no need for goto at zero in any case the aniProp will have a value it can never be null. However the animated value (from filter) can be null thus _value keep track between default value and animatedValue

constructor(defaultValue :T){
this.filtersArr  = []; 
this.defaultFilter  = new IdentityFil(0,100,defaultValue,defaultValue); 
this._value  = null; 
}

public update(rTimeMs :number):boolean{
//---STEP-1--find current filter or return defaultValue
const baseGoto = this.getBaseFilter(rTimeMs);
if (baseGoto == null ){
    //--4-sep-2022 
    // this.defaultFilter.update--???????
    this._value = this.defaultFilter.animatedValue();
    return false; //return
}else {
    //--Step-2 --importantay-- VVVVVV
    baseGoto.update(rTimeMs);
    //---step-3:get value from AniFilter inside gotoObj
    const animatedValue = baseGoto.animatedValue();
            //.........................just to be over sure
            //--just for safety a filter will never send out null
            //---default filter is the baseValue of 
            if (animatedValue !== null){
                this._value = animatedValue;
            }else {
                //--this must not be null
                //--why use animatedValue why not value?
                this._value = this.defaultFilter.animatedValue();
            }
}
return true;
}

public value():T{
//--do not return this._value that is null in start-- this will give a correct result even without an update  
if (this._value == null){
    return this.defaultFilter.animatedValue();
} else {
    return this._value;
} 
}
//--relationship between goto(0) and base value?
 
public set(n :T):T{
this.defaultFilter.setBaseValue(n);
// this._value = this.defaultFilter.animatedValue();
 return n;
} 
protected getBaseFilter(rTimeMs :number):IFilter<T> | null{
if (this.filtersArr.length < 1){return null;}    

let lastFrameChecked = 0;
let rez : IFilter<T> | null = null;

    for (let i = 0; i < this.filtersArr.length; i++) {
        const fil = this.filtersArr[i];
        if ( rTimeMs >= (fil.rTimeMsStart )  ){
            // why >= there hsd be no equal since a frame once checked shd not be present in gotoArray
            if ( (fil.rTimeMsStart ) >= lastFrameChecked ) {
                //--for next iteration
                lastFrameChecked = (fil.rTimeMsStart);
                //--the value                    
                    rez = fil;
            }
        }   
    }
//-------------
return rez;
}
protected addFilter(bfil :IFilter<T>){
    //----?? check if there is a filt;er at that frame
    //--NO DUBLICATE FRAME NUMBERS ALLOWED IN GOTOARRAY 
    for (let i = 0; i < this.filtersArr.length; i++) {
        const fil = this.filtersArr[i];
        if (fil.rTimeMsStart == bfil.rTimeMsStart ){
            throw new Error( `There is another animation inserted at exectly this frame (number ${fil.rTimeMsStart}), please either remove the previous animation or change time for your new animation`);
            
        }
    }

    this.filtersArr.push(bfil);
}
////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////
public goto(atSec :number,value :T):boolean{
    const v = new IdentityFil(atSec * 1000,(atSec * 1000) + 1000,value,value,0);
    this.addFilter(v);
    return false;//// new goto frame ADDED 
}
public jumpBetween(startSec :number,endSec :number,firstValue :T, secondValue :T,delayInMS :number=1000){
  const jb = new JumpBetween(startSec * 1000,endSec * 1000,firstValue,secondValue,delayInMS * 1000);
  this.addFilter(jb);
}





}