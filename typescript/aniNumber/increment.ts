// Rules
//--From and To 
//-1-From and To can not be negative, since they are time.also math.ceil
//-2--From can not be larger than To.
//-3--From can be 0 but To can min be 1.
//----------
//-4--startValue can be negative but endValue can not be negative
//-5--systemMaxEndValue for endValue is 3000
//-6--delayFactor = total ms / total pix Math.ceil. it means after each delay factor add One.
//--7--we can not find startValue and endValue till init since if these values are offScreen we need canvas dims BUT THIS CLASS DOES NOT HAVE TO KNOW ABOUT INIT-- RUN IT IN INIT--this class just get numbers no abstractions.
//--8-- _ret_val ?? CAN be null since this module is not cencerned about init.
//--9-- THE START AND END values must be simple numbers not percentages not some enum--translate it and give it to us
//--10--Remember This class does not need init.
//--once you sr this thing ON it will work till end no way to stop it. AND there is no need to. After one correct starting Frame (which can be the starting frame its-self or any msDelta larger than it and lower than endTime) once it starts then it will run till end @ 60 fps.
import Motherfilter from "./motherFilter.js";

export default class Increment extends Motherfilter{

constructor(from :number,to :number,startValue :number,endValue :number){
super();
this.FROM =  this.getFrom(from,to);
this.TO =  this.getTo(from,to);
this.TIMEDIFFSEC = Math.ceil(this.TO - this.FROM);
this.STARTVALUE = Math.ceil(startValue);//can be negative
this.ENDVALUE = this.getEndValue(endValue,startValue);
this.XDIFF = this.getXDiff(this.ENDVALUE,this.STARTVALUE);
this.TOTALFRAMES = Math.ceil(this.TIMEDIFFSEC * 60);
this.framesCounter = 0; 
this.ADDFACTOR = this.XDIFF/this.TOTALFRAMES; 
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
        this._ret_val = Math.abs(this.STARTVALUE + rezult);
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
private getEndValue(endValue :number,startValue :number){
if (endValue > this.SYSTEMMAXVALUE){throw new Error("endValue is too large");}
if (endValue < 0){throw new Error("endValue can not be negative");}
return (Math.ceil(endValue));//cant be fraction
}
} 