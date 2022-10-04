import BaseFilter from "../../filters/baseFilter.js";  

export default class Random extends BaseFilter<number> {

constructor(rTimeMsStart :number,rTimeMsEnd :number,min :number,max :number , delayInMS :number=1){

super(rTimeMsStart,rTimeMsEnd,min,max,delayInMS);  
}

public update(rTimeMs :number):boolean{
if (super.update(rTimeMs) == false ){ return false;}    
////////////////////////////////////////////////    
    
if (this.delay.isSegChanged(rTimeMs) == true){
        this.setAnimatedValue( 
            this.getRandom(this.getStartValue(),this.getEndValue() ) 
        );
        return true;
    }
return true;    
}

}
