import IFilter from "../filters/IFilter";
import IdentityFil from "../filters/identityFil.js";

export default class AniProp <T>  {
//--this cant be null its not _ret_val of filter its aniProp    
protected _value :T | null;                 
// protected defaultValue :T;                 
protected filtersArr :IFilter<T>[];       
protected defaultFilter :IFilter<T>;       
//--now that we have default value there is no need for goto at zero in any case the aniProp will have a value it can never be null. However the animated value (from filter) can be null thus _value keep track between default value and animatedValue

constructor(defaultValue :T){
this.filtersArr  = []; 

this.defaultFilter  = new IdentityFil(0,100,defaultValue,defaultValue); 
this._value  = null; 
//--What if not filter is applied--? then what ? --Then always have 1 filter at frame 0; 
// once inserted can not be deleted just altered.
// this.goto(0,defaultValue); 
}
public update(rTimeMs :number):boolean{
//---STEP-1--find current filter or return defaultValue
const baseGoto = this.getBaseFilter(rTimeMs);
if (baseGoto == null ){
    // this.defaultFilter.update--???????
    this._value = this.defaultFilter.animatedValue();
    return false; //return
}else {
    //--Step-2 --importantay-- VVVVVVV
    baseGoto.update(rTimeMs);
    //---step-3:get value from AniFilter inside gotoObj
    const animatedValue = baseGoto.animatedValue();
            //.........................just to be over sure
            //--just for safety a filter will never send out null
            //---default filter is the baseValue of 
            if (animatedValue !== null){
                this._value = animatedValue;
            }else {
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
public goto(rTimeMs :number,value :T):boolean{
    const v = new IdentityFil(rTimeMs,rTimeMs + 1000,value,value,0);
    this.addFilter(v);
    return false;//// new goto frame ADDED 
}
public jumpBetween(rTimeMsStart :number,rTimeMsEnd :number,pointOne :T, pointTwo :T,delaySec :number=1000){
    // //--convert delay in sec
    // const timeDiff = rTimeMsEnd - rTimeMsStart;
    // //---starting fil will be added in the main loop
    // //-----check modulus if not zero add ending filter since it will be skipped in the loop
    // if (timeDiff % delaySec !== 0 ){
    //     //--The end time does not matter a filter does not end on its and time rather when a new filter appear BUT end time is required for internal working...maybe
    //     const endFil = new IdentityFil(rTimeMsEnd,rTimeMsEnd + 1000,pointTwo,0);
    //     this.addFilter(endFil);
    // }
    // //--now the loop to insert intermiediate filters--math . floor is imp since if its not modulus = 0 then leave the last bit we took care of it above
    // const noOfIter = Math.floor( timeDiff / delaySec);
    // for (let i = 0; i < noOfIter ; i ++) {
    //     // i = 0 will insert the starting filter delaySec * 0 = 0
    //     if ( (i % 2) == 0 ){
    //     const filEven = new IdentityFil(
    //         rTimeMsStart + (i * delaySec) ,
    //         rTimeMsEnd + 1000,
    //         pointOne,0);
    //         this.addFilter(filEven);
    //     }else {
    //         const filOdd = new IdentityFil(
    //             rTimeMsStart + (i * delaySec) ,
    //             rTimeMsEnd + 1000,
    //             pointTwo,0);
    //             this.addFilter(filOdd);
    //     }
    // }
}





}