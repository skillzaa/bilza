
import BaseFilter from "../../filters/baseFilter.js";  

export default class Random extends BaseFilter<number> {
min :number;  
max :number;  
private lastFrame :number | null;
//baseValue has been replaced by min    
constructor(rTimeMsStart :number,rTimeMsEnd :number,min :number,max :number , delayInMS :number=0){
//--min = baseValue    
super(rTimeMsStart,rTimeMsEnd,min,delayInMS);  
this.min =min;
this.max = max;
this.lastFrame = null;
}
public update(rTimeMs :number):boolean{
//---for frame by frame drawing    
if (this.lastFrame == null){
this._animatedValue = Math.floor(Math.random()*(this.max - this.min + 1) + this.min);
}else {
        // this.checkDelay()
}    
    return  true;
}
// public animatedValue(): number {
// const r = Math.floor(Math.random()*(this.max - this.min + 1) + this.min);
// return r;
// }
}
