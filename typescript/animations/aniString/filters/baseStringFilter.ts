import BaseFilter from "../../filters/baseFilter.js";
 
export default class BaseStringFilter  extends BaseFilter <string> {


constructor(
    rTimeMsStart :number,
    rTimeMsEnd :number,
    startValue :string,
    endValue :string,
    afterValue :string,
    delaySec :number=0)
{

super(rTimeMsStart,rTimeMsEnd,startValue,afterValue,endValue,delaySec);
}

//--Bad Design--but dont remove
init(canvasWidthHeight: number): boolean {
    return true;
}

}