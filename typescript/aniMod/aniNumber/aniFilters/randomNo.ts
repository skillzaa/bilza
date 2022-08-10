import BaseFilter from "./baseFilter.js";

export default class RandomNo extends BaseFilter  {
private    min:number;
private    max:number;

constructor(msDeltaStart :number,msDeltaEnd :number,min :number=1, max :number=10,delayInMS :number=0){

super(msDeltaStart,msDeltaEnd,delayInMS);    
this.min = min;
this.max = max;
}

public update(msDelta: number, baseGotoValue?: number): boolean {
this._ret_val =   Math.floor(Math.random()*(this.max - this.min + 1) + this.min);
return true;
}
init(canvasWidthHeight: number): boolean {
this.min = this.percToPix(canvasWidthHeight,this.min);
this.max = this.percToPix(canvasWidthHeight,this.max);
return true;
}       
}
