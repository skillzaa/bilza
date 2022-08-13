import BaseFilter from "../../filters/baseFilter.js";
 
export default class BaseBooleanFilter  extends BaseFilter <boolean> {
    
constructor(
    rTimeMsStart :number,rTimeMsEnd :number,
    baseValue :boolean,
    delayInMS :number=0)
{
super(rTimeMsStart,rTimeMsEnd,baseValue,delayInMS);

}


init(canvasWidthHeight: number): boolean {
    return true;
}

}