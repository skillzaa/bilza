import IFilter from "../aniNumber/IFilter";

export default class IncrementTimed implements IFilter{
protected  exhausted :boolean;    
protected  _ret_val :number | null;

protected  startTime :number;
protected  endTime :number;

protected  startValue :number;
protected  endValue :number;

protected Xdiff :number;
protected  timeDiff :number;
protected  readonly SYSTEMMAXVALUE :number;
protected  readonly SYSTEMMINVALUE :number;

constructor(startTime :number,endTime :number,startValue :number,endValue :number){
this.startTime = startTime; 
this.endTime = endTime; 

this.startValue = startValue; 
this.endValue = endValue; 

this.timeDiff = Math.abs(this.endTime - this.startTime) ;
this.Xdiff = Math.abs(this.startValue - this.endValue);

this.exhausted = false;
this._ret_val = null;
//--------------------------------
this.SYSTEMMAXVALUE = 3000; 
this.SYSTEMMINVALUE = -3000; 
}

update(msDelta: number): boolean {
const timeLapsed = this.getTimeLapsed(msDelta);
const timeLapPercent = (timeLapsed/(this.timeDiff * 1000)) * 100;
const _ret_val = (this.Xdiff/100) * timeLapPercent;
console.log("_ret_val",_ret_val);
return true;
}

//--change to protected
public setExhausted(msDelta :number):boolean{
        if (msDelta > (this.endTime * 1000) ){
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
//getTimeLapsed is time lapsed for this filter (kind of local msDelta) where as msDelta is form main engine
protected getTimeLapsed(msDelta :number):number{
    return Math.ceil(msDelta - this.startTime);
}

}