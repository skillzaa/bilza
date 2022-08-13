import BaseFilter from "../../filters/baseFilter.js";
 
export default class BaseNumberFilter  extends BaseFilter <number> {
    
constructor(
    rTimeMsStart :number,rTimeMsEnd :number,
    baseValue :number,
    delayInMS :number=0)
{
super(rTimeMsStart,rTimeMsEnd,baseValue,delayInMS);

}


}