import BaseFilter from "./baseFilter.js";


export default class JumpBetween <T> extends BaseFilter <T>  {

//baseValue has been replaced by min    
constructor(rTimeMsStart :number,rTimeMsEnd :number,startValue :T,endValue :T , delaySec :number=0){

super(rTimeMsStart,rTimeMsEnd,startValue,endValue,delaySec);  

}
public update(rTimeMs :number):boolean{
//--importanttay    
if(this.isBeyond(rTimeMs) == true){return false;}

    if (this.delay.isSegChanged(rTimeMs) == true){
        if (this._animatedValue == null){
            this._animatedValue = this.startValue;
            return true;
        }
        //--------
        if (this._animatedValue == this.startValue ){ 
            this._animatedValue = this.endValue;
            return true;
        }else {
            this._animatedValue = this.startValue;
            return false;
        }
    }else {
        return false;
    }
}    

}
