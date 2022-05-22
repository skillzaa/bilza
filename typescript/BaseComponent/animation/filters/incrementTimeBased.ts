// Rules
// --1-- From and To can not be negative, since they are time.also math.ceil
//--2--From can not be larger than To.
//--3--From can be 0 but To can min be 1.
//--4--startValue can be negative but endValue can not be negative
//--5--systemMaxEndValue for endValue is 3000
//--6--delayFactor = total ms / total pix Math.ceil. it means after each delay factor add One.
//--7--we can not find startValue and endValue till init since if these values are offScreen we need canvas dims BUT THIS CLASS DOES NOT HAVE TO KNOW ABOUT INIT-- RUN IT IN INIT--this class just get numbers no abstractions.
//--8-- _ret_val ?? cant be null since this module is not cencerned about init.
//--93-- THE START AND END values must be simple numbers not percentages not some enum--translate it and give it to us

export default class Increment{
private readonly FROM :number;
private readonly TO :number;
private readonly STARTVALUE :number;
private readonly ENDVALUE :number;
private readonly DELAYFACTOR :number;
private  delayCounter :number;
private readonly SYSTEMMAXENDVALUE :number;
private readonly SYSTEMMINSTARTVALUE :number;
//--just for use if required
private  readonly TIMEDIFF :number;
private  readonly XDIFF :number;
//--it can send null if there is no correct answer
private    _ret_val :number | null;

constructor(from :number,to :number,startValue :number,endValue :number){

this.FROM =  this.getFrom(from,to);
this.TO =  this.getTo(from,to);

this.STARTVALUE = Math.ceil(startValue);//can be negative
this.ENDVALUE = this.getEndValue(endValue,startValue);
this.TIMEDIFF = Math.ceil(this.TO - this.FROM);
//since start number is bigger or else we get -ve number
this.XDIFF = this.getXDiff(this.ENDVALUE,this.STARTVALUE);
//--D
this.DELAYFACTOR = this.getDelayFactor(this.TIMEDIFF,this.XDIFF);
this.delayCounter = 0; 
this._ret_val = this.STARTVALUE; //I dont care about init
//-21-may-2022 dont change this line
this.SYSTEMMAXENDVALUE = 3000;
this.SYSTEMMINSTARTVALUE = -1000;
}

update(msDelta :number):boolean{
    if (msDelta > (this.FROM) && msDelta <= (this.TO)  ){
        
        const timeLapsed = this.getTimeLapsed(msDelta);

        const factor = Math.ceil(timeLapsed/this.DELAYFACTOR);
        
        if (this.STARTVALUE > 0 ){//startValue == positive
            this._ret_val = Math.abs(this.STARTVALUE + factor);
            }else {
                //since this.STARTVALUE is -ve so + will have -ve effect
                this._ret_val = this.STARTVALUE + factor;
                // if (this._ret_val >= 740){
                //     debugger;
                // }
            }    
         
        return true;
    }else {
        this._ret_val = null;
        return false;
    }
}

value():number | null{
    return this._ret_val;
}

//////////////////////////////


private getTimeLapsed(msDelta :number):number{
    if (msDelta > this.TO){throw new Error("getTimeLapsed error: msDelta can not be bigger than To value");}
    return Math.ceil(msDelta - this.FROM);
}

private getFrom(from :number, to :number):number{
if (from < 0 ){throw new Error("from can not be smaller than zero");}
if (from >= to ){throw new Error("from can not be smaller than zero");}
//-errorerror this always return atleast 1000 what if the value is less than 1000???--but its time and not value so lets leave it for now
let r = Math.ceil(from * 1000);
return r;
}
private getTo(from :number,to :number,):number{
//keep it here since the from may not yet be checked    
if (from >= to ){throw new Error("from can not be smaller than zero");}
if (to < 1){throw new Error("To can not be smaller than One");}
let r = Math.ceil(to * 1000)
return r;
}
private getEndValue(endValue :number,startValue :number){
if (endValue > this.SYSTEMMAXENDVALUE){throw new Error("endValue is too large");}
if (endValue < 0){throw new Error("endValue can not be negative");}
return (Math.ceil(endValue));//cant be fraction
}
private getDelayFactor(timeDiff :number,xDiff :number):number{
return Math.ceil(timeDiff/xDiff);
}
private getXDiff(endValue :number,startValue :number):number{
let r = null;    
if (startValue > 0 ){//startValue == positive
r = endValue - startValue;
}else {
   r = endValue + Math.abs(startValue);
}    
    if (r !== null){return r;}
    else {
        throw new Error("failed to getXDiff");
    }
}
} 