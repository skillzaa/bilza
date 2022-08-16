import BaseFilter from "../../filters/baseFilter.js";
import IPercFilter from "./IPercFilter.js";

//--- I need  BasePercFilter since it takes BaseFilter and add init and percToPix  
/** 
 * --13-8-2022 : following also works in which it implements BUT it works without that since in aniPerc we told it that 
* protected filtersArr :IPercFilter<number>[];   
AND
export default interface IPercFilter <T> extends IFilter<T>
or
export default interface IPercFilter <T> // a totally new interface

 */
// export default class BasePercFilter  extends BaseFilter <number> implements IPercFilter<number> {
/**
 * it is much better to use one interface with one class if we need another interface to be supported create a new base class
 * in the fol :
 export default class BasePercFilter  extends BaseFilter <number> implements IPercFilter<number> {
 * we can implement our own interface IPercFilter<number> since the IFilter interface is already implemented by baseFilter and we dont need to implement that again-
 */    
export default class BasePercFilter  extends BaseFilter <number> implements IPercFilter<number> {
    public responsive :boolean;
    protected heightWidth :number | null;
        
constructor(
    rTimeMsStart :number,rTimeMsEnd :number,
    baseValue :number,
    endValue :number,
    delayInMS :number=0)
{
super(rTimeMsStart,rTimeMsEnd,baseValue,endValue,delayInMS);

this.responsive = true;    
this.heightWidth = null; // this is canvasHeightWidth    

}
init(canvasWidthHeight: number): boolean {
this.heightWidth = canvasWidthHeight;    
    return true;
}
//---must over write in sub-filter
// public animatedValue():number{
    
// }

responsiveValue(perc :number):number {
if (this.responsive == true){
    if (this.heightWidth == null){throw new Error("heightWidth is null");}
    return ((this.heightWidth / 100) * perc);
} else {
    return perc;
}   
}

percToPix(perc :number):number {
if (this.heightWidth == null){throw new Error("heightWidth is null");}
    return ((this.heightWidth / 100) * perc);
}


}