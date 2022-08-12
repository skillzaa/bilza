import BaseFilter from "./baseFilter.js.js";

export default class RandomNo extends BaseFilter  {
private    min:number;
private    max:number;

constructor(rTimeMsStart :number,rTimeMsEnd :number,min :number=1, max :number=10,delayInMS :number=0){

super(rTimeMsStart,rTimeMsEnd,delayInMS);    
this.min = min;
this.max = max;
}

public update(rTimeMs: number, baseGotoValue?: number): boolean {
this._ret_val =   Math.floor(Math.random()*(this.max - this.min + 1) + this.min);
return true;
}
init(canvasWidthHeight: number): boolean {
this.min = this.percToPix(canvasWidthHeight,this.min);
this.max = this.percToPix(canvasWidthHeight,this.max);
return true;
}       
}
