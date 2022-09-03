import AniNumber from "../aniNumber/aniNumber.js";
import IdentityFil from "../filters/identityFil.js";
import InitObj from "./initObj.js";

export default class AniPerc extends AniNumber  {
   
private initialized :boolean;    
private canvasWidthHeight :number | null;
private initObj :InitObj;
/**
 * Finally the solution to an age old problem :How to change the Interface of an item from that what it has been assigned in a base class: answer re-declare that item with a new interface in a new class and the  use it internally.
 ---protected filtersArr :IPercFilter<number>[];    
 */
constructor(initialValue :number=0,responsive:boolean=true, minValue :number=-3000,maxValue :number=3000){

super(initialValue);
this.initialized = false;
this.canvasWidthHeight = null;
this.initObj = new InitObj(this.filtersArr);
}

init(canvasWidthHeight :number){
if (this.initialized == true){return;}//--dont remove from here
this.initialized = true; //--so that init run just once in life time 
this.canvasWidthHeight = canvasWidthHeight;    
//----------------init defaullt value 
const defFil  = new IdentityFil<number>(0,100,
    this.responsiveValue(this.canvasWidthHeight,this.defaultFilter.getBaseValue()),
    this.responsiveValue(this.canvasWidthHeight,this.defaultFilter.getBaseValue()),
    );
//--now replace the orignal
this.defaultFilter  = defFil;
//----------------init all
this.initObj.init(this.canvasWidthHeight);
}

responsiveValue(heightWidth :number,perc :number):number {
    return ((heightWidth / 100) * perc);
}

}  