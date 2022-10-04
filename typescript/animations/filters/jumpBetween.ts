import BaseFilter from "./baseFilter.js";


export default class JumpBetween <T> extends BaseFilter <T>  {

constructor(startTimeMs :number,endTimeMs :number,startValue :T,endValue :T , delaySec :number=0){

super(startTimeMs,endTimeMs,startValue,endValue,delaySec);  

}

public update(rTimeMs :number):boolean{
    
if (super.update(rTimeMs) == false ){ return false;}


if (this.delay.isSegChanged(rTimeMs) == false){
    return true; // its ok but not acting for now
}
////////////////////////////////////////
        if (this.getAnimatedValue() == null){
            this.setAnimatedValue( this.getStartValue() );
        }
        //--------
        if (this.getAnimatedValue() == this.getStartValue() ){ 
            this.setAnimatedValue( this.getEndValue() );
        }else {
            this.setAnimatedValue( this.getStartValue() );
        }
   
return true;       
}    

}
