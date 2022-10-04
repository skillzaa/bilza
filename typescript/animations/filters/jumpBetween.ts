import BaseFilter from "./baseFilter.js";


export default class JumpBetween <T> extends BaseFilter <T>  {

//baseValue has been replaced by min    
constructor(rTimeMsStart :number,rTimeMsEnd :number,startValue :T,endValue :T , afterValue :T, delaySec :number=0){

super(rTimeMsStart,rTimeMsEnd,startValue,endValue,afterValue,delaySec);  

}
public update(rTimeMs :number):void{
    
if (this.delay.isSegChanged(rTimeMs) == false){
    return;
}
////////////////////////////////////////
        if (this._animatedValue == null){
            this._animatedValue = this.startValue;
        }
        //--------
        if (this._animatedValue == this.startValue ){ 
            this._animatedValue = this.endValue;
        }else {
            this._animatedValue = this.startValue;
        }
   
 super.update(rTimeMs);        
}    

}
