import BaseFilter from "../../filters/baseFilter.js";
 
export default class BaseNumberFilter  extends BaseFilter <number> {
    
constructor(
    rTimeMsStart :number,rTimeMsEnd :number,
    startValue :number,
    endValue :number,
    delaySec :number=0)
{
super(rTimeMsStart,rTimeMsEnd,startValue,endValue,delaySec);

}


}