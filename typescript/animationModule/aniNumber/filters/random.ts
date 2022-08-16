import BaseFilter from "../../filters/baseFilter.js";  

export default class Random extends BaseFilter<number> {

//baseValue has been replaced by min    
constructor(rTimeMsStart :number,rTimeMsEnd :number,min :number,max :number , delayInMS :number=1){

super(rTimeMsStart,rTimeMsEnd,min,max,delayInMS);  
}
public update(rTimeMs :number):boolean{
//--importanttay    
if(this.isBeyond(rTimeMs) == true){return false;}

    if (this.delay.isSegChanged(rTimeMs) == true){
        this._animatedValue = this.getRandom(this.startValue,this.endValue);
        return true;
    }else {
        return false;
    }    
}

}
