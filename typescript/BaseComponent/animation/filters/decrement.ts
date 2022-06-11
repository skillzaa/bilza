import Motherfilter from "./motherFilter.js";

/**
 * Rules
 * startValue can not be negative since this is decrement operation and we have to reduce /subtract. if startValue is negative then it is already offLeft of screen how can be decrement it more 
 * the endValue can be negative since the com may have to go offscreen left.
 * the add factor is subtract factor in decrement operation.
 */
export default class Decrement extends Motherfilter{

constructor(from :number,to :number,startValue :number,endValue :number){
super();
this.FROM =  this.getFrom(from,to);
this.TO =  this.getTo(from,to);
//---This time is in seconds no ms
this.TIMEDIFFSEC = Math.ceil(this.TO - this.FROM);
//---Start and End value
//can Not be negative ????
this.STARTVALUE = this.getStartValue(startValue,endValue);
//-We have to reach this number in any case. CAN BE NEGATIVE
this.ENDVALUE = this.getEndValue(startValue,endValue);
//since start number is bigger or else we get -ve number
this.XDIFF = this.getXDiff(this.STARTVALUE,this.ENDVALUE);
//--?? the 60 needs to be changed
this.TOTALFRAMES = Math.ceil(this.TIMEDIFFSEC * 60);
this.framesCounter = 0; 
// this.active = false; 
//--dont Math.ceit it
this.ADDFACTOR = Math.abs(this.XDIFF/this.TOTALFRAMES); 
//---this should be null as long as it has not been changed if its frame has come- other than that it should always return null so that its value is not processed
this._ret_val = null;
//-21-may-2022 dont change this line
}
 
update(msDelta :number):boolean{
    this.setActive(msDelta);
    this.setExhausted(msDelta);    

//-----------------------------------
if (this.active == true  && (this.framesCounter <= this.TOTALFRAMES)){
//--here we are missing one frame since the first frame has frameCounter == 0 so result is zero.--may be make ADDFACTOR = 1    
    const rezult = Math.ceil(this.ADDFACTOR *  this.framesCounter);
    this.framesCounter +=1;

    // if (this.STARTVALUE >= 0 ){//startValue == positive
        this._ret_val = this.STARTVALUE - rezult;
        // console.log("msDelta",msDelta,"this._ret_Val",this._ret_val);
        // }else {
            //since this.STARTVALUE is -ve so + will have -ve effect
            // this._ret_val = this.STARTVALUE + rezult;
        // }    
    return true;
}else {
    this._ret_val = null;
    this.active = false;
    return false;
}
}

private getFrom(from :number, to :number):number{
if (from < 0 ){throw new Error("from can not be smaller than zero");}
if (from >= to ){throw new Error("from can not be smaller than zero");}
//-errorerror this always return atleast 1000 what if the value is less than 1000???--but its time and not value so lets leave it for now
return from;
}
private getTo(from :number,to :number,):number{
//keep it here since the from may not yet be checked    
if (from >= to ){throw new Error("from can not be smaller than zero");}
if (to < 1){throw new Error("To can not be smaller than One");}
return to;
}
/**
 * 
 * @param startValue can NOT be negative in decrement operations
 * @param endValue can be negative
 * @returns 
 */
private getStartValue(startValue :number,endValue :number):number{

if (startValue > this.SYSTEMMAXVALUE){throw new Error("start Value (for decrement operation) is too large");}
if (startValue < 0){throw new Error("start Value (for decrement operation) can not be negative");}
//cant be Negative or fraction
return Math.abs(Math.ceil(startValue));
} 
//---endValue is on left
private getEndValue(startValue :number,endValue :number){
if (endValue <= this.SYSTEMMINVALUE){throw new Error("start Value (for decrement operation) is too large");}
if (endValue > startValue){throw new Error("end Value (for decrement operation) can not be larger than start value");}
//CAN be Negative
return Math.ceil(endValue);
}

} 