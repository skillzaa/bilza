import BaseFilter from "../../filters/baseFilter.js";  

export default class Random extends BaseFilter<number> {

constructor(rTimeMsStart :number,rTimeMsEnd :number,min :number,max :number , delayInMS :number=1){

super(rTimeMsStart,rTimeMsEnd,min,max,min,delayInMS);  
}

public update(rTimeMs :number):void{
    if (this.delay.isSegChanged(rTimeMs) == true){
        this._animatedValue = this.getRandom(this.startValue,this.endValue);
        return;
    }
return;    
}

}
