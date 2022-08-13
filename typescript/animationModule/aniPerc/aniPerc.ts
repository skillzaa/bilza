import AniNumber from "../aniNumber/aniNumber.js";
import ConstantPercVal from "./filters/constantPercVal.js";
import IFilter from "../filters/IFilter.js";
import IPercFilter from "./filters/IPercFilter.js";


export default class AniPerc extends AniNumber  {
public defaultFilter :IFilter<number>;    
private canvasWidthHeight :number | null;
protected filtersArr :IPercFilter<number>[];   
/**
 * Finally the solution to an age old problem :How to change the Interface of an item from that what it has been assigned in a base class: answer re-declare that item with a new interface in a new class and the  use it internally.
 */
constructor(initialValue :number=0,responsive:boolean=true, minValue :number=-3000,maxValue :number=3000){

super(initialValue,minValue,maxValue);
this.defaultFilter = new ConstantPercVal(0,100,initialValue);
// this.responsive = responsive;
this.canvasWidthHeight = null;
this.filtersArr  = []; 
}
//..
public setResponsive(tf :boolean){
    for (let i = 0; i < this.filtersArr.length; i++) {
        const fil = this.filtersArr[i];
        fil.responsive = tf;
    }    
}

//-init has to do nothing with responsive this is just to get canvas width and height
init(canvasWidthHeight :number){
this.canvasWidthHeight = canvasWidthHeight;    

//----------------init defaullt value 
// this.defaultValue = this.percToPix(this.defaultValue,canvasWidthHeight);
//----------------init all
    for (let i = 0; i < this.filtersArr.length; i++) {
        const fil = this.filtersArr[i];
        fil.init(canvasWidthHeight);
    }     
//---Every time the init is run we multiply some values but during running of the programme we shd init it once and then stop it.    
    // this.responsive = false;    
}


} 