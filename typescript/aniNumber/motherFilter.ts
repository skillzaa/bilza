
export default class Motherfilter {
protected  active :boolean;
protected  exhausted :boolean;    
protected  _ret_val :number | null;
protected  FROM :number;
protected  TO :number;
protected  ENDVALUE :number;
protected  TOTALFRAMES :number;
protected  framesCounter :number;
protected  ADDFACTOR :number;

protected  readonly SYSTEMMAXVALUE :number;
protected  readonly SYSTEMMINVALUE :number;
//--just for use if required
protected    TIMEDIFFSEC :number;
protected    XDIFF :number;
protected    STARTVALUE :number;

constructor(){

    this.active = false; 
this.exhausted = false;
this._ret_val = null;
//--------------------------------
this.FROM =0; 
this.TO =0; 
this.ENDVALUE =0; 
this.TOTALFRAMES =0; 
this.SYSTEMMAXVALUE = 3000; 
this.SYSTEMMINVALUE = -3000; 
this.TIMEDIFFSEC =0; 
this.XDIFF =0; 
this.STARTVALUE =0; 
this.framesCounter =0; 
this.ADDFACTOR =0; 

}
public setActive(msDelta :number):boolean{
if (this.active == false){
    // if FROM = 0 then 0 X 1000 = 0; 
    if (msDelta > (this.FROM * 1000) && msDelta <= (this.TO * 1000)  ){
    this.active = true;
        return true;
    }else { 
        this._ret_val = null; //if not active return null
        return false;
    }    
}
return false;
} 
isActive():boolean{
return this.active;
}
public setExhausted(msDelta :number):boolean{
if (msDelta > (this.TO * 1000) ){
    this.exhausted = true;
        return true;
    }
return false;
}    
public isExhausted():boolean{
return this.exhausted;
}    
public value():number | null{
    return this._ret_val;
}
protected getTimeLapsed(msDelta :number):number{
    return Math.ceil(msDelta - this.FROM);
}

protected getXDiff(startValue :number,endValue :number):number{
let r = null;    
if (endValue > 0 ){//startValue == positive
r = startValue - endValue; //st val is beigger
}else {
   r =  startValue + Math.abs(endValue);
}    
    if (r !== null){return r;}
    else {
        throw new Error("failed to getXDiff");
    }
}

}