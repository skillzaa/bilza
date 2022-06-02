// Rules
// --1-- From and To can not be negative, since they are time.also math.ceil
//--2--From can not be larger than To.
//--3--From can be 0 but To can min be 1.
//--4--Keep in mind startValue is not negative and larger one on the right side where as the endValue is on left and is smaller since this is decrement operation.
import Motherfilter from "./motherFilter.js";

export default class Decrement extends Motherfilter{
// private readonly FROM :number;
// private readonly TO :number;
// private readonly ENDVALUE :number;
// private readonly TOTALFRAMES :number;
// private  framesCounter :number;
// private  ADDFACTOR :number;
// // private  active :boolean;
// private readonly SYSTEMMAXVALUE :number;
// private readonly SYSTEMMINVALUE :number;
// //--just for use if required
// private  readonly TIMEDIFFSEC :number;
// private  readonly XDIFF :number;
// protected    readonly STARTVALUE :number;

constructor(from :number,to :number,startValue :number,endValue :number){
super();
this.FROM =  this.getFrom(from,to);
this.TO =  this.getTo(from,to);
//--this is what we add out answer to finally
//---This time is in seconds no ms
this.TIMEDIFFSEC = Math.ceil(this.TO - this.FROM);
//---Start and End value
this.STARTVALUE = this.getStartValue(startValue,endValue);//can be negative
//-We have to reach this number in any case
this.ENDVALUE = this.getEndValue(startValue,endValue);
//since start number is bigger or else we get -ve number
this.XDIFF = this.getXDiff(this.STARTVALUE,this.ENDVALUE);
//--D
this.TOTALFRAMES = Math.ceil(this.TIMEDIFFSEC * 60);
this.framesCounter = 0; 
// this.active = false; 
//--dont Math.ceit it
this.ADDFACTOR = this.XDIFF/this.TOTALFRAMES; 
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

    if (this.STARTVALUE >= 0 ){//startValue == positive
        this._ret_val = Math.abs(this.STARTVALUE - rezult);
        // console.log("msDelta",msDelta,"this._ret_Val",this._ret_val);
        }else {
            //since this.STARTVALUE is -ve so + will have -ve effect
            this._ret_val = this.STARTVALUE + rezult;
        }    
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
private getStartValue(startValue :number,endValue :number){
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