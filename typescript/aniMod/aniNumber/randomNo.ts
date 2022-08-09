import BaseFilter from "../baseFilter.js";

export default class RandomNo extends BaseFilter  {
private    min:number;
private    max:number;

constructor(msDeltaStart :number,msDeltaEnd :number,min :number=1, max :number=10,delayInMS :number=0){

super(msDeltaStart,msDeltaEnd,delayInMS);    
this.min = min;
this.max = max;
}

public value(msDelta: number, baseGotoValue?: number): number | null {
return  Math.floor(Math.random()*(this.max - this.min + 1) + this.min);
}

}
