import BaseFilter from "../baseFilter.js";

export default class Increment extends BaseFilter{
    

protected  startValue :number;
protected  endValue :number;

protected Xdiff :number;
protected  timeDiff :number;
//msDeltaStart wil be +1 than actual and msDeltaend will be -1 from actual
constructor(msDeltaStart :number,msDeltaEnd :number,startValue :number,endValue :number){
super(msDeltaStart,msDeltaEnd);
if (startValue >= endValue ){throw new Error("start value can not be equal to or larger than end value in an increment operation");}    

this.startValue = startValue; 
this.endValue = endValue; 

this.timeDiff = Math.abs(this.msDeltaEnd - this.msDeltaStart) ;
this.Xdiff = Math.abs(this.startValue - this.endValue);

}

//--why return number | null??;
public update(msDelta :number,baseGotoValue :number=0):boolean{
//----safety    

const timeLapsed = Math.ceil(msDelta - this.msDeltaStart);
const timeLapPercent = (timeLapsed/(this.timeDiff)) * 100;
const distanceLapsed = (this.Xdiff/100) * timeLapPercent;
this._ret_val = baseGotoValue + parseFloat(distanceLapsed.toFixed(2));

return  true;
}
public qualifyToRun(msDelta :number):boolean{
if (msDelta < this.msDeltaStart || msDelta > this.msDeltaEnd ) {
            return false;
        }else { 
            return true;
        }    
}

init(canvasWidthHeight: number): boolean {
this.startValue = this.percToPix(canvasWidthHeight,this.startValue);
this.endValue = this.percToPix(canvasWidthHeight,this.endValue);
return true;
}       
}