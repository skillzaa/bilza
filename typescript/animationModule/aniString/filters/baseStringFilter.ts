import BaseFilter from "../../filters/baseFilter.js";
 
export default class BaseStringFilter  extends BaseFilter <string> {
    
constructor(
    rTimeMsStart :number,rTimeMsEnd :number,
    baseValue :string,
    delayInMS :number=0)
{
super(rTimeMsStart,rTimeMsEnd,baseValue,delayInMS);

}

//--Bad Design--but dont remove
init(canvasWidthHeight: number): boolean {
    return true;
}
percToPix(perc :number ,canvasWidthHeight :number ) {
    return ((canvasWidthHeight / 100) * perc);
}
}