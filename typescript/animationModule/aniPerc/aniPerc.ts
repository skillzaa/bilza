import AniNumber from "../aniNumber/aniNumber.js";

import IPercFilter from "./filters/IPercFilter.js";



export default class AniPerc extends AniNumber  {
   
    
private canvasWidthHeight :number | null;
/**
 * Finally the solution to an age old problem :How to change the Interface of an item from that what it has been assigned in a base class: answer re-declare that item with a new interface in a new class and the  use it internally.
 ---protected filtersArr :IPercFilter<number>[];   
 */
constructor(initialValue :number=0,responsive:boolean=true, minValue :number=-3000,maxValue :number=3000){

super(initialValue);
this.canvasWidthHeight = null;
}

init(canvasWidthHeight :number){
this.canvasWidthHeight = canvasWidthHeight;    

//----------------init defaullt value 
// this.defaultFilter.init(canvasWidthHeight);
//----------------init all
    // for (let i = 0; i < this.filtersArr.length; i++) {
    //     const fil = this.filtersArr[i];
    //     fil.init(canvasWidthHeight);
    // }     
//---Every time the init is run we multiply some values but during running of the programme we shd init it once and then stop it.    
    // this.responsive = false;    
}

}  