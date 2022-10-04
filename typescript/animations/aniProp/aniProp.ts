import IFilter from "../filters/IFilter";
import IdentityFil from "../filters/identityFil.js";
import JumpBetween from "../filters/jumpBetween.js";
 

//-------------------------------------------

export default class AniProp <T>  {
//--this cant be null its not _ret_val of filter ITS aniProp    
protected _value :T | null;                 
// protected defaultValue :T;                 
protected filtersArr :IFilter<T>[];       
protected defaultValue :T;       
//--now that we have default Filter there is no need for goto at zero in any case the aniProp will have a value it can never be null. However the animated value (from filter) can be null thus _value keep track between default value and animatedValue

constructor(defaultValue :T){
this.filtersArr  = []; 
this.defaultValue  = defaultValue; 
this._value  = null; 
}
/**
 * --1--Get the last applied filter. If there is a filter get its value (even if the filter is expired we get its beyond value).
 * --2--If there is no filter inserted just return the AniProp default value.
 * --3-- dont foget to update the filter.
 * @param rTimeMs 
 * @returns 
 */
public update(rTimeMs :number):boolean{
//---STEP-1--find current filter or return defaultValue
const baseGoto = this.getBaseFilter(rTimeMs);
if (baseGoto == null ){
    this._value = this.defaultValue;
    return false; //return
}else {
    //--Step-2 --importantay-- VVVVVV
    baseGoto.update(rTimeMs);
    //---step-3:get value from AniFilter inside gotoObj
    this._value = baseGoto.value();
}
return true;
}
//--4-sep-2022-Dont change this method. This is the last place to stop AniProp giving out null. AniProp must never give a null since it reprsents a number / string etc which is never null.

public value():T{
//--do not return this._value that is null in start-- this will give a correct result even without an update  
if (this._value == null){
    return this.defaultValue;
} else {
    return this._value;
} 
}
//--relationship between goto(0) and base value?
 
public set(n :T):T{
this.defaultValue = n;
 return this.defaultValue;
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