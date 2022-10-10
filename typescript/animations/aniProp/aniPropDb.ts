import BaseAniProp from "./baseAniProp.js";
import IdentityFil from "../../animations/filters/identityFil.js";
import JumpBetween from "../../animations/filters/jumpBetween.js";
import BaseFilter from "../../animations/filters/baseFilter.js"; 

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

export default class AniPropDb<T> extends BaseAniProp<T> {
    
constructor(value :T){
    super(value);
}

protected addFilter(bfil :BaseFilter<T>){
    //----?? check if there is a filt;er at that frame
    //--NO DUBLICATE FRAME NUMBERS ALLOWED IN GOTOARRAY 
    for (let i = 0; i < this.filtersArr.length; i++) {
        const fil = this.filtersArr[i];
        if (fil.startTimeMs == bfil.startTimeMs ){
            throw new Error( `There is another animation inserted at exectly this frame (number ${fil.startTimeMs}) for this prop, please either remove the previous animation or change time of your new animation`);
        }
            
 }
this.filtersArr.push(bfil);
}

////////////////////////////////////////
////////////////////////////////////////
public goto(atSec :number,value :T):boolean{
    const v = new IdentityFil(atSec * 1000,(atSec * 1000) + 1000,value);
    this.addFilter(v);
    return false;//// new goto frame ADDED 
}
public jumpBetween(startSec :number,endSec :number,firstValue :T, secondValue :T,delayInMS :number=1000){
  const jb = new JumpBetween(startSec * 1000,endSec * 1000,firstValue,secondValue,delayInMS);
  this.addFilter(jb);
}

public getFiltersArray():BaseFilter<T>[]{
return this.filtersArr;
}
//////////////////////////////////////////


}