import BaseFilter from "../../filters/baseFilter.js";  

export default class Random extends BaseFilter<number> {
min :number;  
max :number;  

//baseValue has been replaced by min    
constructor(rTimeMsStart :number,rTimeMsEnd :number,min :number,max :number , delayInMS :number=0){

super(rTimeMsStart,rTimeMsEnd,min,max,delayInMS);  
this.min =min;
this.max = max;
}
public update(rTimeMs :number):boolean{
//--importanttay    
if(this.isBeyond(rTimeMs) == true){return false;}

    if (this.delay.isSegChanged(rTimeMs) == true){
        this._animatedValue = this.getRandom(this.min,this.max);
        return true;
    }else {
        return false;
    }    
}

}
