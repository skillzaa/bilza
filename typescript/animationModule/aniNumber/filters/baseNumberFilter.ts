import BaseFilter from "../../filters/baseFilter.js";
 
export default class BaseNumberFilter  extends BaseFilter <number> {
    
constructor(
    rTimeMsStart :number,rTimeMsEnd :number,
    baseValue :number,
    delayInMS :number=0)
{
super(rTimeMsStart,rTimeMsEnd,baseValue,delayInMS);

}


init(canvasWidthHeight: number): boolean {
    return true;
}
percToPix(perc :number  ):number {
    if (this.heightWidth == null){throw new Error("init error!");
    }
    return ((this.heightWidth / 100) * perc);
}
}