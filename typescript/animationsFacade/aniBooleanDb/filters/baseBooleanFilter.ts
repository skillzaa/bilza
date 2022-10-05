import BaseFilter from "../../filters/baseFilter.js";
export default class BaseBooleanFilter  extends BaseFilter <boolean> {
    
constructor(
    rTimeMsStart :number,rTimeMsEnd :number,
    startValue :boolean,
    endValue :boolean,
    delaySec :number=0)
{
    super(rTimeMsStart,rTimeMsEnd,startValue,endValue,delaySec);
}

}